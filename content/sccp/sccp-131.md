---
eccp: 131
network: Ethereum
title: Increase migrateEntriesThresholdAmount to 720000
author: Jackson Chan (@jacko125)
status: Implemented
created: 2021-07-12T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Raise `migrateEntriesThresholdAmount` from SNX 1,000 to SNX 720,000 by calling the `setMigrateEntriesThresholdAmount` method.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

As per the specification of the escrow contract [EIP-60](https://eips.elysian.finance/eips/eip-60), migration of entries for snx holders with balances above 1,000 snx was constrained to a 2-month period from the date of creation of the new escrow contract as a safety measure.

However with the current state, there remains 5 addresses that cannot migrate, as the deadline `setupExpiryTime` has already expired. In order to allow for the migration of these wallets, this eccp proposes to increase the `migrateEntriesThresholdAmount` to SNX 720,000 (slightly above the amount of migratable holdings of the largest wallet). This change does not affect other wallets, that are yet to migrate, who can still migrate to the new escrow contract at their convenience.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
