---
layout: partials/shared/boxes/box
image: /assets/img/smart-contracts/003-cancel.svg
---

##### migrationManager

migrationManager는 컨트랙트 레지스트리에서 지정되며 모든 마이그레이션 동작들을 관장합니다. 마이그레이션 매니저는 레지스트리의 컨택트, 마이그레이션 상태, 컨트랙트들의 밸런스를 설정할 수 있습니다. migrationManager의 권한은 막강하기 때문에 migrationManager를 지정할 때는 특정 임무, 예를 들면 새로운 컨트랙트 버전으로의 마이그레이션등을 위해서만 사용하고 그 후에는 권한을 회수하게 됩니다.
