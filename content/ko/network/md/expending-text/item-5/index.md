---
layout: partials/shared/expendable-text-box
title: 가상 체인

readMoreButton:
  - /ko/_shared/buttons/read-more-btn.md

readLessButton:
  - /ko/_shared/buttons/read-less-btn.md
extra:
  - extra.md
---

Orbs에서 실행되는 모든 애플리케이션은 일반적으로 본인만의 가상 체인을 갖습니다. 가상화를 통해 애플리케이션이 독립된 환경을 가지게되며 동시에 노드에게 공유된 물리적 인프라도 활용합니다. 각 가상 체인은 블록, 상태 및 자체적인 컨센서스 인스턴스를 각각 별도로 유지 관리합니다. 모든 Orbs 검증자는 모든 가상 체인을 병렬 실행하기 때문에 퍼미션레스 검증자 풀이 네트워크를 통해 완전하게 공유되고 스테이킹됩니다. 이를 통해 각 애플리케이션들의 독립성을 강력하게 유지하면서도 전체 네트워크의 보안 및 탈중앙화가 가능해집니다.

서로 다른 가상 체인에서의 트랜잭션에 대한 컨센서스는 각각 독립적으로 구동되며, 여러 리소스로 나뉘어져 동시에 실행될 수 있습니다. 가상 체인의 원장은 서로 독립적으로 관리되며, 각각의 연산작업은 병렬로 처리됩니다. 또한, 각각의 가상체인에 대한 상태 분리는 가상 머신의 메모리 사용량도 줄여줍니다.