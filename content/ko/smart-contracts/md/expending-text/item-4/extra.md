---
layout: partials/shared/simple-md
---

참여자들의 위임정보, 위임수량, 자체수량이 변경될 때마다 컨트랙트는 stakingRewards에게 알림을 줘서 리워드가 제대로 계산되도록 해줍니다. 또한 위임 컨트렉트는 참여자의 스테이킹 정보가 변경되면 투표 컨트렉트에 이를 알려주어 투표 컨트랙트에서 위임한 이의 정보를 표해줍니다.