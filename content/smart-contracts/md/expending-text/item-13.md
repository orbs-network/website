---
layout: partials/common/expendable-text-box
linesLimit: 3
title: subscriptions
readMoreButton: read more
readLessButton: read less
border: true
---

The subsceription contract manages the virtual chains’ subscription status. The contract allows developers to create a virtual chain, modify its properties, including metadata properties used by the Orbs platform, and extend a virtual chain subscription. Virtual chain creation and subscription extension are not done by directly interacting with the subscriptions contract but rather by calling the subscription plan contract that updates the subscriptions contract. The subscriptions contact holds a list of valid subscription plan contracts.
