---
layout: partials/shared/simple-md
---

Orbs의 지분증명 설계방식에서 이용수수료와 리워드는 두가지 중요한 목적을 두고 있습니다. 첫번째는 밸리데이터 노드 운영에 대한 보상입니다. 두번째는 스테이킹을 통한 네트워크 보안에 기여하는 것에 대한 리워드입니다. V2 리워드 모델은 네트워크 운영과 보안에 기여하는 참여자들로서 마땅히 보상을 받아야할 이들을 대상으로 하고 있습니다.

밸리데이터 노드를 운영하는 데는 컴퓨팅 리소스 투입 비용 및 운영 비용이 발생합니다. 이러한 비용들을 충당하기 위해 두가지 형태의 보상안이 준비되어 있습니다. 첫번째는 가상 체인(Virtual Chain)의 네트워크 사용 수수료로 이는 가상 체인을 설치하는 네트워크 사용자가 Orbs 토큰으로 지불하게 됩니다. 각 가상체인이 지불하는 수수료는 적절한 이윤을 포함한 비용으로 책정되어 있습니다. 네트워크가 성숙해짐에 따라 더 많은 가상체인이 운영되면, 가상체인에 할당되는 컴퓨팅 리소스의 비용으로 대표되는, 가상체인 당 발생비용은 거의 일정할 것으로 예상됩니다. 이는 확장성 있는 솔루션으로, 사용예가 많아질수록 가디언의 이익이 증가하게 됩니다.

V2에서는 가디언들이 비용을 충당하는데 도움이 되는 방식으로 인증 위원회에 참여하도록 장려하고자, 인증 위원회 참여하는 가디언을 대상으로 추가 지원금을 계획하고 있습니다. 이 지원자금은 Defi(탈중앙금융)에서 널리 쓰이고 있는 스테이블 코인인 DAI로 지급됩니다. 달러에 연동되는 자금을 사용함으로써 토큰의 가치 변동성에 영향을 받지 않습니다. 이 자금은 네트워크 운영 초기에 운영되는 가상 체인의 수가 적은 때에 밸리데이터 노드 운영자금을 지원하기 위해 마련한 것입니다. 이는 예기치 않은 가격 변동에도 네트워크가 지속적으로 작동한다는 확신을 기업들에게 줄 수 있으므로 중요하다고 볼 수 있습니다.

밸리데이터 노드를 운영하며 인증을 거쳐 인증위원회에 참여하는 가디언은 연간 총 3,000 DAI를 받게 됩니다. 이 지원금은 가디언이 운영위원회에 참여하도록 유도하기 위함이며, 인증위원회의 지분을 늘림으로써 기업들에게 더욱 매력적인 네트워크를 만들 수 있습니다.

가상체인이 지불하는 사용료와 지원자금은 밸리데이터 운영을 위해 지급하는 것입니다. 따라서, 스테이킹 보상과 달리, 이들은 밸리데이터 노드를 운영하는 가디언에게 직접 지급됩니다.  지불수수료와 지원금은 락업되지 않은 상태로 지급되며 델리게이터와 공유하지 않으므로, 가디언들이 운영 비용을 감당하는데 활용할 수 있습니다. 이 두가지는 가디언이 해당 위원회에 참여하고 있는 기간동안 지급되며 가디언은 언제든지 꺼내갈 수 있습니다.

스테이킹 리워드는 네트워크 보안에 기여하는 선출된 가디언과 델리게이터에게 보상으로 주어집니다. **다만 스테이킹 리워드, 사용수수료, DAI지원금은 선출된 가디언 중 상위 22개 가디언에게만 지급된다는 점을 참고하시기 바랍니다**.

총 위임에 참여한 지분에 대한 보상은 최대 연간 12%이며 수익성과 지속적인 인플레이션의 상충관계를 해결하는 지점으로 고려하여 정했습니다. 기본적으로 전체 리워드는 2/3(최대8%)가 델리게이터에게, 나머지 1/3(최대4%)은 가디언에게 지급하도록 설정되어 있으며, 2주마다 분배가 이루어지도록 기본설정되어 있습니다.

스테이킹 리워드는 연간 8천만 ORBS로 상한되어 있습니다. 더 많은 비율의 ORBS 토큰 홀더가 참여하는 경우, 가디언의 유효 지분에 비례하여 리워드가 계산됩니다. 리워드는 각 기간별로 유효한 위임 지분을 바탕으로 실시간 계산됩니다.
