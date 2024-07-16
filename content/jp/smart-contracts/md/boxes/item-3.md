---
layout: partials/shared/boxes/box
image: /assets/img/smart-contracts/003-cancel.svg
---

##### migrationManager

MigrationManagerは、コントラクト・レジストリによって指定された、すべての移行アクションを制御します。移行マネージャーは、レジストリに連絡先を設定し、連絡先の状態と残高を移行できます。MigrationManagerは高い権限を持っているため、新しいコントラクト・バージョンへ移行する際は、特定のミッションにmigrationManagerを指定してから、その特権を取り消すことをお勧めします。
