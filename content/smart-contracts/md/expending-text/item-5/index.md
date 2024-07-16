---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: elections
readMoreButton:
  - /_shared/buttons/read-more-btn.md

readLessButton:
  - /_shared/buttons/read-less-btn.md
border: true
---

The [election](https://etherscan.io/0x02Ca9F2c5dD0635516241efD480091870277865b) contract connects the delegation contract with the committee, Guardians Registration and certification contracts. In addition, the election contract implements the voting logic both for voteUnready and voteOut and manages the node state machine notification readyForCommittee and readyToSynct.
