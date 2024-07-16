---
layout: partials/shared/simple-md
---

가상 체인의 생성과 구독은 subscriptions 컨트랙트만으로 직접 상호작용하여 이루어지는 것이 아니라 "subscription plan" 컨트랙트를 호출하여 subscription 컨트렉트에 업데이트를 해주어야 합니다. subscription 컨트랙트는 유효한 "subscription plan" 컨트랙트에 대한 목록을 가지고 있습니다.
