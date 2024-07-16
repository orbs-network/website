---
layout: partials/shared/simple-md
---

delegation 컨트랙트로부터의 알림에 따라, election 컨트랙트는 참여자들의 새로운 유효 스테이킹을 계산하여 Committee 컨트렉트에 업데이트해줍니다. 가디언의 readyForCommittee, 위원회, election 컨트랙트는 가디언의 등록상태와 유효성을 검증하여 Committee 컨트랙트에 추가할 수 있도록 요청을 보냅니다. 만일 가디언이 현재 voted-unready 또는 voted-out 상태라면, election 컨트랙트는 committee 컨트랙트가 위원회로부터 해당 가디언을 빼도록 요청합니다.
