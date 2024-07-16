---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/self-sovereign-identity-on-the-orbs-blockchain/bg.jpg
blogUrl: self-sovereign-identity-on-the-orbs-blockchain
date: 2019-05-30
title: Self-sovereign Identity on the Orbs Blockchain
author:
  - /blog/common/authors/AssafBielski.md
type:
short_description: (https://www.orbs.com/defining-the-public-blockchain/)). Arguably, there is no area in which guarantees are needed more than our online identity and personal data. Online services made our lives easier in many ways, but these benefits far too often come at the expense of our privacy. Blockchain can change that, and by doing so, it would enable us to finally gain control of our digital identity.
---

(https://www.orbs.com/defining-the-public-blockchain/)). Arguably, there is no area in which guarantees are needed more than our online identity and personal data. Online services made our lives easier in many ways, but these benefits far too often come at the expense of our privacy. Blockchain can change that, and by doing so, it would enable us to finally gain control of our digital identity.

### **The Challenge: Proving Our Identity Online**

One of the oldest problems of the internet is digital identity. We still don’t have a way to prove who we are online and to share verified credentials such as age, bank details and driver’s license without physical documents or face-to-face contact.

Trying to solve this problem through a centralized service failed so far, and a prime reason for that is the fear of letting one entity control so much personal data. So we need a way to supply digital proofs about ourselves, control by none other than us.

### **The Answer: Self Sovereign Identity on the Blockchain**

The concept of self-sovereign identity (SSI), control of digital identity by its owner, has been around for years, but with blockchain can finally be materialized. Initial services such as Sovrin and uPort are taking their first steps in this space, and recently Microsoft also announced a solution based on the Bitcoin network.

I believe that due to its public nature, high scale, and low predictable costs, Orbs would be the ideal blockchain for Digital Identity. Orbs’ core team designed a product concept that takes what’s available in the market to a new level, enhancing trust and minimizing fraud.

### **A Two-part Solution**

The solution is comprised of two main elements:

**Identity wallet**: A user-controlled application that stores all your verified identity credentials, which are digitally signed by their respective issuers (governments, banks, health providers, universities, etc).

**Orbs-based verification network:** A blockchain network through which entities relying on those credentials can verify their authenticity and validity.

### **Example - Applying for a Job**

1. Jenny graduated from a university in Singapore and downloads from the university’s website a digital credential confirming her degree, which she stores in her ID wallet
2. Jenny then applies for a job at US employer X, which requires applicants to be at least 21 years old and have a university degree.
3. As part of the online application, Jenny shares (from her ID wallet) that she is over 21 (based on her digital driver’s license) and that she has a degree (based on her digital credentials). Note that she doesn’t share the actual documents, only proof of age and degree.
4. Employer X receives the claims and verifies them by checking the identifiers of Jenny’s university and the Ministry of Transport, which are then published on the  Blockchain.
5. After verification, Jenny’s application is approved and she advances to the next step, completely online and without sharing any unnecessary information.

## **Enhancing Security and Minimizing Identity Fraud**

Determining which entities and credentials are genuine and which are fraudulent is the main challenge for a decentralized identity system. The solution adds two mechanisms that increase trust in credentials and minimize fraudulent behavior:

- **A public web of trust** - In the same way that a person would trust a stranger that was vouched for by a friend, organizations that rely on a credential may trust an unknown organization that is vouched for by those it does trust. In Jenny’s example, employer X may not know her university, but if it is endorsed by the Singapore Ministry of Education, which is in turn endorsed by the US Department of Education, employer X will accept the credential since it trusts the US authorities.
- **Core identity credentials (CIC) registry** which allows individuals to monitor the usage of their CICs (e.g. passport and social security numbers),  without revealing personal information, and also enables all participants to identify fraudulent issuers and resolve conflicts between issuers of names, domains, etc (e.g. Georgia the nation and Georgia the US state).

### **Why Orbs Is the Right Platform for Digital Identity?**

- **Trust:** to enable truly self-sovereign identities, the service must run on a public blockchain, free from the control of corporate entities.
- **Scale:** The scale of an identity service dictates a high throughput platform.
- **Cost:** The platform’s cost per transaction must be minimal to ensure such a high volume use case is commercially viable.

The prospect of true digital identities is exciting but has been slow to get off the ground. I believe that blockchain is the missing link and that Orbs has the potential to be the go-to blockchain for this space. We are working with several partners make it a reality and will update as this work progresses.
