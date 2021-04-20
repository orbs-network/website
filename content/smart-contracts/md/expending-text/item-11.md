---
layout: partials/common/expendable-text-box
linesLimit: 3
title: guardians Registration
readMoreButton: read more
readLessButton: read less
border: true
---

The guardiansRegistration contract stores the guardians registration data. And allow guardians to register, modify their data and unregister. In addition the contact stores a metadata map allowing each guardian to store general purpose keys to be queried by the Orbs platform. For example, a link to the guardian identification data may be stored at the "ID_FORM_URL" metadata key. The guardiansRegistration provides mapping functions, such as from Orbs addresses to Ethereum addresses, used by other contracts to allow function calls using the Orbs address. The guardiansRegistration contract notifies the election contract on changes in guardians registration status.
