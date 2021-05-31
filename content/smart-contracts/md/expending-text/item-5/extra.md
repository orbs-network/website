---
layout: partials/shared/simple-md
---

Upon a notification from the delegation contract, the elections contract calculates the participant's new effective stake and updates the committee contract.
Upon a Guardian’s readyForCommittee, the committee, the election contract validates that the Guardian is registered and not voted-out and requests that the committee contract add it. If a Guardian was voted-unready or voted-out, the elections contract requests that the committee contract remove it from the committee.
