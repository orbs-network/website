---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/writing-an-app-on-orbs/bg.jpg
blogUrl: writing-an-app-on-orbs
date: 2019-06-11
title: Complete Guide to Writing an App on the Orbs Network (Part I of II)
author:
  - ../common/authors/Kiril.md
type:
short_description: ### Introduction
---

### Introduction

We believe that the development of blockchain technologies is going to change the way developers write applications as we know today. Orbs is a part of this massive effort by existing as a public platform, open to anyone. These two articles (Parts I & II) will demonstrate how to build a fully working chat application using Orbs platform.

In general, decentralized applications consists of two parts: A smart contract which stores information, and a client-side that communicates with it via sdk. In Part I, we will describe how to write a simple smart contract on the Orbs network, test it, and finally to deploy it.

Part II is devoted to writing a simple client-side application using React. I will demonstrate how to use orbs-client-sdk to query smart contract and send a transaction written under consensus.

### Prerequisites

Before we start, you will need the following tools installed on your machine:

1. Docker
2. Node and npm

Docker is used to run Orbs smart contracts locally. NodeJS and npm are used to write client-side application that will communicate with the smart contract.

## Part 1: Writing, testing & deploying an Orbs smart contract

...

### Anatomy of a simple smart contract

Writing contracts for Orbs is very simple. Currently, it supports Go language only, which uses a basic syntax familiar enough to most programmers without prior knowledge.

Let’s look at the sample contract that increments a counter and returns its current value:

![](/assets/img/blog/writing-an-app-on-orbs/image8-1.png)

A contract consists of two exported functions - add and get. They will be available to be called from a client application. We reveal them by defining a global variable PUBLIC.

System function (\_init) is called by the system only once when the contract is deployed. This function is not part of the public interface.

### Orbs-contract-sdk

[Contract SDK](https://github.com/orbs-network/orbs-contract-sdk) allows developers of smart contracts to interact with the Orbs platform. There is plenty of documentation about it in the [gitbook](https://orbs.gitbook.io), so we won’t discuss it in too much detail right now.

What is important for us in this tutorial is the ability to set and read _state_. State is a simple map between key and its value. In the example above, we create a counter and update its value on add operation. The initial value is 0 as defined in \_init() function. Add function reads the current value in the state and adds the amount which has been passed to the function.

### Running locally with Gamma-cli

When we have a contract, we execute it by running it on a local server.

Orbs provides its own toolchain (similar to Ganache for Ethereum) for running a simulated blockchain environment. It is called Gamma-cli, and is available here: [https://github.com/orbs-network/gamma-cli](https://github.com/orbs-network/gamma-cli).

On Mac, you can install it with a single command (you need to have Docker installed for gamma to run):

`brew install orbs-network/devtools/gamma-cli`

You can start it with `gamma-cli start-local` and stop with `gamma-cli stop-local`. After restart, all the data will be lost.

Then you can deploy the contract similar to the command below:

`gamma-cli deploy Counter.go -name counter -signer user1`

## Our first real contract

Now that we have covered the prerequisite knowledge, we can begin developing the contract for our chat application.

In the spirit of test-driven development, we will start with an end-to-end test that will help us flesh out our API in the process.

First, we should be able to add new messages to the chat and get a message ID in return:

![](/assets/img/blog/writing-an-app-on-orbs/image4-1.png)

This e2e test completes the first part of the flow - putting information into the system. A simple contract that could achieve that goal would be something like this:

![](/assets/img/blog/writing-an-app-on-orbs/image5-1.png)

Since our state is a key-value store, and we need to invent our own way to emulate a list of messages per channel. The easiest way to do that is to keep a counter of messages per channel and then simply increment it when we add a new key (\`m_testChannel_1\` will store content of the message, while \`count_testChannel\` will store the number of messages of \`testChannel\`).

After seeing that the e2e passes, we can modify the contract a little bit to store some more data, such as timestamp, sender, and block height.

Now we can focus on adding another crucial part of any chat app; retrieving the list of messages. We will update our e2e a bit to flesh out the behavior we want: Add a single message, then ask for a list of messages with ids between 1 and 10.

![](/assets/img/blog/writing-an-app-on-orbs/image9-1.png)

Why do we even need JSON? Orbs platform doesn’t yet support more complex values like arrays or structures (great opportunity for a pull request btw 😉)

JSON is a standard way of serialization and deserialization of data in JavaScript, and is supported by any major platform. We will use JSON and expect to get a response like this: `[{ID: 1, Message: “hello, world!”}]`.

Inside the contract, we will define the new struct for serialization and the contract method to return the result of serialization as a string:

![](/assets/img/blog/writing-an-app-on-orbs/image11.png)

You can see the final version of the contract at the project [git repo](https://github.com/orbs-network/conversation/blob/master/contract/contract.go).

### Deploying contract to Orbs node

The only thing is left - deploy it. Based on the configuration of gamma-cli environment, you can specify the targeted environment - local or mainnet. More about it [here:](https://orbs.gitbook.io/contract-sdk/gamma-in-depth/working-with-multiple-environments)

`gamma-cli deploy contract.go -name Conversation`

## Conclusion

This is it! We’ve reached the end of Part I. Here we described how to create, test and deploy a smart contract on Orbs platform. On the next part (Part II) we will describe how to write a simple web client that is able to interact with our contract.

Feel free to dive into code of the app in the git repo or even play with the app itself.

...

_Kirill is leading a cloud infrastructure effort at Orbs. He’s very passionate about his cats and the deepest lore of the Dark Souls series. [Kirill's Github](https://github.com/netoneko)._
