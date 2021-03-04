---
layout: partials/common/text-with-title
linesLimit: 3
title: elections
readMoreButton: read more
readLessButton: read less
---

The election contract connects the delegation contract with the committee, guardians registration and certification contracts. In addition, the election contract implements the voting logic both for voteUnready and voteOut and manages the node state machine notification readyForCommittee and readyToSynct. Upon a notification from the delegation contract, the elections contract calculates the participant’s new effective stake and updates the committee contract.

Upon a guardian’s readyForCommittee, the committee, the election contract validates that the guardian is registered and not voted-out and requests that the committee contract add it. If a guardian was voted-unready or voted-out, the elections contract requests that the committee contract remove it from the committee.
