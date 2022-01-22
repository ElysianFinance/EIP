---
eccp: 28
network: Ethereum
title: 'Reduce Rewards On Curve - SNX 32,000'
status: Implemented
author: Kaleb Keny (@kaleb-keny)
created: 2020-06-29T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Decrease SNX incentives on the sUSD Curve pool to 32,000 SNX per week

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

48,000 SNX per week from inflation rewards are currently paid to the sUSD pool on curve which incentivizes liquidity provision to the sUSD/ DAI-USDC-USDT pool.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The recent growth in the size of the sUSD pool on Curve is mainly driven by forthcoming distribution of CRV tokens. This allows us to lower the rewards we pay from the inflation pool while avoiding any material impact on the peg.

Other reasons to decrease the incentive, as noted in the previous ECCP:

1. It is important to not consistently overpay when incentivizing the pools, as it is effectively a transfer of value from snx minters to pool contributors. The incentive should be calibrated depending on the state of the system to pay the least amount of incentive required that achieves the desired effect of peg stability.
2. The 48k previously proposed was bound to be recalibrated as per the state of the system (peg, supply of synths...).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
