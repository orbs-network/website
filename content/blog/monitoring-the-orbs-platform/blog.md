---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/monitoring-the-orbs-platform/bg.jpg
blogUrl: monitoring-the-orbs-platform
date: 2019-05-13
title: Monitoring the Orbs Platform
author:
  - /blog/common/authors/Ido.md
type:
short_description: This update will elaborate on pre-Production load testing, and post-Production performance monitoring. Both use cases employ the Orbs monitoring dashboard as a key component.
---

This update will elaborate on pre-Production load testing, and post-Production performance monitoring. Both use cases employ the Orbs monitoring dashboard as a key component.

In the weeks leading up to our planned launch, we were running stability tests on various network configurations. Our purpose was twofold: identify bugs that manifest themselves only after a long time the system has been online, and test the load limits of the system.

We wanted to share the progress of stability tests with the whole team, so we decided to create a Dashboard that would be posted on a TV at the office, where everyone can see real-time metrics of the running tests.

The requirement was to let everyone have a casual glance once in a while and immediately spot anomalies. Digging deeper into problems is left to other tools.

As a starting point, we already had a **/metrics** endpoint on the Orbs node, that prints out the node's metrics in JSON format. For example, see the [Orbs Audit node metrics](http://validator.orbs.com/vchains/1100000/metrics).

Below, you can see sample metrics on our validator node in Production - It shows the current block height as 452631:

![](/assets/img/blog/monitoring-the-orbs-platform/image4-1.png) ![](/assets/img/blog/monitoring-the-orbs-platform/image5-1.png) ![](/assets/img/blog/monitoring-the-orbs-platform/image7.png)

...

For the presentation layer, we checked several dashboard solutions: [Geckoboard](https://www.geckoboard.com/learn/dashboard-examples/) is a great looking dashboard especially on a TV screen and if your use case is covered by what it supports out of the box, it is highly recommended. In our case we needed some features which were not available, such as displaying a time frame of less than 1 day, and the ability to perform calculations over the data directly in the dashboard.

Another solution we tried is [DataDog](https://www.datadoghq.com/), which showed initial promise as it supports scraping JSON metrics directly from a URL, and performing calculations over it. However we were not satisfied with the visual quality when displayed on a TV screen (specifically the lack of a Dark Mode), and decided to keep looking.

Eventually, we decided to use the [Standard Plan of Grafana Cloud](https://grafana.com/cloud#pricing) with a Prometheus backend for these reasons:

1. Hosted solution - no need to maintain a Grafana server
2. Renders beautifully on a TV screen
3. Flexible in performing calculations over incoming data in realtime (together with Prometheus).

Grafana is a presentation layer only, and can receive data from multiple data sources, in our case it was either from Prometheus or Graphite - both of which are industry standards for a Time Series Database (TSDB). Since Prometheus has client libraries for both Go and Javascript we went along with it.

As for the actually displaying data, we started with a TV monitor attached to an off the shelf Android TV device, but it turned out that several browsers we tested on the Android TV did not render correctly any of our tested dashboards, and it was not possible to disable the screen saver and have it load the dashboard on startup without hacking the device.

So we decided to go with a Raspberry PI B+ v3 which is a mean little machine, capable of rendering the graphs without a hitch. Since it's a Linux machine and has wide community around it, it was easy to find solutions and guides on how to set up Grafana to our liking.

Here is our real monitoring TV (complete with window-glare):

![](/assets/img/blog/monitoring-the-orbs-platform/image2-1.png)

## Dashboard

Let's go over the monitoring architecture we eventually came up with:

![](/assets/img/blog/monitoring-the-orbs-platform/image8.png)

In our test networks, the **Orbs Nodes** are our own machines on AWS. On Production, they are managed by their respective owners. Most of them are on AWS but it matters not, as long as their **/metrics** endpoint is accessible.

The [metrics processor](https://github.com/orbs-network/metrics-processor) is a Node.js server running on an AWS machine. It passively listens on requests on its own **/metrics** endpoint and when called, executes HTTP POST requests to **/metrics** of every node, collects the metrics and converts to Prometheus format and returns the data.

Conversion to Prometheus format is done with the help of a [Node.js Prometheus client library](https://github.com/siimon/prom-client).

We use [pm2](https://pm2.io/doc/en/runtime/overview/) to make sure metrics-processor stays up in the event of a machine restart. We use an [ecosystem file](https://github.com/orbs-network/metrics-processor/blob/master/pm2/ecosystem.config.js) to configure it.

We initially planned to configure the Hosted Grafana's Prometheus Database to periodically sample the metrics-processor but unfortunately it is a passive-only solution, meaning you have to **push data into it** rather than have it actively scrape targets (such as the metrics processor) to **pull data**.

The solution was to create a **second Prometheus database** to act as a bridge. We do not need to store data on that Prometheus - its only purpose in life is to **periodically pull data** from metrics-processor and **push it to the Hosted Prometheus**.

For the Prometheus bridge, we use a predefined [Prometheus Docker image](https://hub.docker.com/r/prom/prometheus/) with some simple [configuration](https://github.com/orbs-network/metrics-processor/blob/master/prometheus/prometheus.yml). It runs on the same AWS machine as the metrics-processor and has automatic restart configured for it, so if the machine restarts, Prometheus will start automatically. So while it is a somewhat unwanted addition to the architecture, it requires very little maintenance.

The Hosted Prometheus on the Grafana Cloud is where the **actual metrics data is stored**, so all tests data (and now Production data) is easily presentable on Grafana.

### We created two main dashboards:

An "**Orbs Production**" dashboard, whose purpose is a high-level view, suitable for TV display, for casual glances once in a while to see everything "looks right".

Sample of the Orbs Production dashboard:

![](/assets/img/blog/monitoring-the-orbs-platform/image1-1.png) An "**Orbs DevOps**" dashboard which contains a lot more information, useful when starting to go deeper when some problem is suspected.

Sample of the Orbs DevOps dashboard:

![](/assets/img/blog/monitoring-the-orbs-platform/image6.png)

We plan to introduce a Prometheus Go client library into the Orbs node to allow it to output its metrics directly in Prometheus format in addition to the existing JSON format.

## Stability tests

During the last month before launch, we continuously ran long-running tests ("stability tests") with the sole purpose of spotting bugs which manifest themselves only after some time the system has been running. We suspected some bugs eluded us on our otherwise very well tested code - we have a suite of unit, component and integration tests and the whole system was written with strict adherence to TDD principles.

Typical stability configuration was a 22-node network (our expected max nodes in Production) with about 10 transactions per second (tps) using the Lean Helix consensus algorithm and the proposed [Production configuration](https://github.com/orbs-network/orbs-network-go/blob/master/config/system_factory_presets.go#L17). We did not try to optimize performance, nor hit resource bounds - only detect anomalies resulting from prolonged runtime. We did discover and fix a memory leak due to some goroutines not terminating, which could not have been otherwise detected.

The method of testing was to let the test run, track it with the dashboards described above, and if some anomaly came up, enable logs on one or more machines and investigate using [logz.io](https://logz.io/).  Error logs are written to logz.io by default but the Info logs are not, as they are very verbose.

Logz.io takes a log line and extracts properties in addition to the basic message. This lets you filter over properties, for example show messages only from node "fca820", or messages for block-height 1 and so forth. When debugging a flow of activity, enabling various filters on properties such as those is essential for making sense of the large amount of logs generated.

Here is a sample log line with properties:

![](/assets/img/blog/monitoring-the-orbs-platform/image5-1.png)

## Load tests

The purpose of load testing is to identify load limitations of specific network configuration. This takes place after stability tests are completed. The monitoring of load tests is identical to that described above. Our **Load Generator** is a [Go process](https://github.com/orbs-network/performance-benchmark) that uses the [Orbs Client SDK in Go](https://github.com/orbs-network/orbs-client-sdk-go) to generate the load.

The load generator process sends out transactions at some rate (transactions per second - **tps**), split evenly between all machine. Its present implementation is to send out a burst of **n** tps, then sleep for a second, then repeat. This is not exactly how sending at specific tps should work, and we plan to improve on this implementation.

We tested on 3 different network configurations:

1. **4-node** network on the **same AWS region** (m4.xlarge in us-east-2)
2. **8-node** network on the **same AWS region** (m4.xlarge in us-east-2 and us-east-1). Same as #1, only more nodes.
3. **15-node network** - actual production nodes (m4.xlarge, **multi-region**)

   These are the **actual production machines**, operated by the Validators. The test ran on a **separate virtual chain** than the production virtual chain. This means it ran on the same AWS EC2 machines as Production, but on different Docker containers (each virtual chain runs on **its own Docker container**) so the Production virtual chain is not polluted with load test inputs.

### Results

The detailed results can be found below. Based on the results, we have concluded the following:

1. Our present load test configuration is **network-bound**. At higher tps rates the Load Generator starts to receive HTTP 503 "Service not available" and other errors. We suspect this is related to limitations inherent to the Docker version we are using, though this is still under investigation. The 4-node network was bound by about 400 tps (100 tps per node). Going above it simply generated multiple errors on the client side and had reduced effect on the nodes (they simply did not process >100 tps).
2. We moved to an 8-node network to reduce per-machine tps load. This allowed for increased tps (about 500tps almost without errors). Remember that the more nodes, the more traffic goes between nodes due to each node conversing with all other nodes during flows of transaction forwarding, node sync and consensus. This explained why we cannot double the tps by doubling node count. We plowed through and increased the load, and **eventually managed to reach 912 tps of committed transactions** - that is **transactions in blocks that passed consensus**. If we want to stay with a negligible error rate on the client side, we are content to use the 500tps as the upper bound of such a network. Once we resolve this network limit we expect to observe an increase in tps limit, as we could not detect any other bound even when having reached 912 tps.
3. **Production configuration (the real 15-node network) showed 200 tps running smoothly**. We did not press it further at that time, so as not to affect the Production virtual chain, and because a Validator Election event was due soon after the test was concluded and we did not want to put it at risk either.
4. **CPU and Disk I/O were not limiting factors** in any of these tests - CPU never exceeded 25% even at max tps, and disk I/O was about 200 Kb/s max.
5. **Blocks per second (as committed by Consensus) was not a limiting factor** during the tests. Initially when tps went up, the rate of blocks/sec went up as well. However, when tps kept going up, the blocks/sec rate peaked and then **started declining**. We assume the reason for this is the higher load meant new blocks contain more transactions because more transactions wait in the Transaction Pool's pending pool when a new block collects them, so new blocks are larger and consequently take longer to pass around the network (and consequently by the time the next block needs to be generated, there are even more transactions waiting for it, and so on and so forth).
6. **When load resumed 100tps, the system resumed normal behavior** - it did not crash or go into some unstable state due to the very high load previously sustained.
7. On higher tps the dashboard showed very jittery data (see graph below). We suspect this to be an artifact of the monitoring architecture, not actual jittery behavior. At times, monitoring data stopped being read (even crawling **/metrics** manually sometimes returns HTTP 500 error) so naturally, the dips in the graph are unreliable)

![](/assets/img/blog/monitoring-the-orbs-platform/image3-1.png)

Detailed results (posted here as raw data from a single load test, take with a grain of salt):

**4-Node Network**

![](/assets/img/blog/monitoring-the-orbs-platform1.png)

**8-Node Network**

![](/assets/img/blog/monitoring-the-orbs-platform2.png)

...

Going forward, we plan to integrate Prometheus metrics right from the node itself, thereby omitting the JSON to Prometheus conversion, and allowing us to generate histograms right in the node itself.
