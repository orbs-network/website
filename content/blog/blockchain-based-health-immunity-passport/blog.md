---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/blockchain-based-health-immunity-passport/bg.png
blogUrl: blockchain-based-health-immunity-passport
date: 2020-09-13
title: Blockchain-based Health Immunity Passport
author:
  - /blog/common/authors/NettaKorin.md
type:
short_description: COVID-19 has had a devastating global impact. Travel and tourism industries have been particularly crippled by the virus, with no near term end in sight. Also concerning is the understanding that this will probably not be the last time that a global pandemic will affect all aspects of life for the world’s population. There is, or there should be, an internalization that if the world is to remain open, it needs to be prepared. Some kind of systematic solution is needed that will assist the global community to live through a pandemic without a mass closing of borders.
---

COVID-19 has had a devastating global impact. Travel and tourism industries have been particularly crippled by the virus, with no near term end in sight. Also concerning is the understanding that this will probably not be the last time that a global pandemic will affect all aspects of life for the world’s population. There is, or there should be, an internalization that if the world is to remain open, it needs to be prepared. Some kind of systematic solution is needed that will assist the global community to live through a pandemic without a mass closing of borders.

Many countries are struggling to adapt, and even those that have succeeded in curtailing the disease have solutions that are far from optimal. Testing each individual upon arrival is labor-intensive and expensive. On the other hand, allowing people in without a test, relying only on “green countries/zones”, or accepting test results that are practically impossible to validate might incentivize adverse selection and have severe consequences in further spreading the disease.

We need a solution for the future, and the key to that solution is blockchain.

Blockchain is most effective when multiple parties need to work together, but do not want one party to control the database; instead, they want shared control and visibility, combined with immutability. So the use case of a global (in our case COVID, but in the future for all other pandemics) passport that would connect to each country’s network of verified medical labs and confirm either immunity or test results, is almost self-explanatory in it’s blockchain use case. This solution would allow multiple local governments, whether states, regions, or cantons, to coordinate amongst themselves with or without the support of a federal or central government. In many instances, local coordination can be far more efficient, productive and effective than waiting for a central government to get its act together. By way of example, in the US, multiple governors could coordinate their health efforts or travel restrictions in order to control flow into their jurisdictions. Similarly, in the EU, member states could use the system to control or stem the flow of visitors into “green zones''. Another benefit is that medical institutions could easily share data on testing methodologies, best practices or any other type of information as part of the global effort to fight the pandemic.

Of course, a system like this would need to address important challenges. For one, user privacy is paramount. Individuals will need to share test results while minimizing access to all other personal data among the parties involved. Second, test authenticity will need to be proved. And finally, based on the above, destination countries will need an instrument that will allow them to set a coherent policy for allowing visitors to cross their borders.

Orbs has been discussing this vision for utilization in an EU member country. We proposed a platform that will consist of two permissionless blockchain databases that are constantly interacting with each other and a mobile app:

- **Trust Registry** - a registry of all medical institutions (hospitals, labs, etc.) that conduct COVID-19 tests (the **“Testers”**). In addition, it will be denoted which health organizations endorse the Tester, if any. This is where the innovation stems from, as this registry would provide an up-to-date metric for the Tester’s credibility. The endorsement will be carried out using digital signatures, and most importantly, they would be open for the public. Each country could determine and publish its criteria for a Tester to be deemed credible, for instance, endorsed by the World Health Organization, or by at least two Ministries of Health, etc. This information would be useful for passengers, knowing in advance whether their latest test results are valid for entering a specific country.
- **Certificate Registry** - an **_anonymized_** registry of all the tests conducted, including all the information necessary to evaluate their reliability, including: Tester ID (taken from the Trust Registry’s), date, test method, batch number, etc. The only piece of information that is excluded would be the individual’s identity. Thus, a unidirectional connection will be established, allowing an individual to prove that she is the subject of a particular test, but never the other way around.
- The mobile app will tie all loose ends, being the **_only_** connection between an individual and a test result.

Upon reaching the passport control post, the individual will present her digitally signed test results over the app. The results will be verified online to make sure that the results are authentic (properly notarized on the Certificate Registry), reliable (conducted by a reliable Tester), and valid (a combination of the previous two along with the individual’s ID).

Blockchain provides the following benefits for:

- The hosting country - reliable, cheap and swift solution for immediately verifying an individual’s medical condition, based on its own prerequisites
- The individual - maximized privacy, given that only the border control is involved in validating the results, without having to contact the Tester

![](/assets/img/blog/blockchain-based-health-immunity-passport/Screen-Shot-2020-09-13-at-13.57.39-1030x356.png)

Naturally, both registries are constantly being updated. In the Trust Registry new testers apply for registration or existing testers are being endorsed (or revoked).  In the Certificate Registry, Tester status is being updated as Testers notarize new test results. Cities, states, regions or countries using this system will have a seamless, transparent and continuously updated database that will allow them to keep their borders open for those who are verified as disease-free, and thus their economy functioning - in a healthier manner.

It is time for a wake-up call and for global coordination and preparation. SARS, MERS, Ebola provided past warnings of what was to come - but COVID-19 took us all to another level. What is to say that the next global pandemic will not be even worse? Given the increasing importance of business travel and tourism to the global economy, we can not remain unprepared. On a technological level, it is time to up the universal game and work together to make sure that we are not torn apart.

For more information please contact Netta Korin ([netta@hexa.org](mailto:netta@hexa.org))

...

_© All Rights Reserved to Hexa Foundation Ltd. (CC)_

_The Hexa Foundation Ltd. (CC) permits the free use of this document, subject to the conditions set forth below._

_The use of this document is permitted for private and personal use only. It is prohibited to copy and to use, or allow others to use, this document for any purpose, whether commercial or non-commercial, other than private and personal use._

_The contents of this document are permitted for use on an as-is basis. The reader or any third party shall not have any claim or demand against Hexa Foundation Ltd. (CC) with respect to any of the contents of this document. Hexa Foundation Ltd. (CC), including its employees and representatives, shall not have any liability for any damage to the reader or any third party that occurs, directly or indirectly, as a result from the use of this document or the information contained therein._
