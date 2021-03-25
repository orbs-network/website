---
layout: partials/common/expendable-text-box
title: Contracts Management and Governance Architecture
---

Orbs’ PoS contacts architecture is designed for future migration, including migration of individual contracts. Contracts in the PoS system that interact with other contracts store their current address in the contact storage. Upon a migration of a contract, the registry sends a push notification to all its managed contacts to update their contract list accordingly.

In addition to the system contracts, the contract registry stores the up-to-date managers list. To ensure synchronization, the contacts query the registry on the current relevant manager before every governance operation. Managers are appointed by the registryAdmin, which can appoint or revoke the role of a manager.

The contract registry emits an update event for any contact address update as well as upon registry migration. By knowing the initial contract registry address, an application may track the up to date contracts list as well as construct an integrated event list from all the contract versions.

An exception to contacts management by the contract registry are the protocol wallet contracts. The protocol wallet contracts have separate admins that manage their functionality and migration.
