---
eccp: 23
network: Ethereum
title: Reduce SNX rewards for sETH/ETH Uniswap pool
author: Nocturnalsheet (@nocturnalsheet)
status: Implemented
created: 2020-05-30T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Decrease SNX incentives for sETH/ETH Uniswap pool by half to 4,000 SNX per week

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

8,000 SNX per week from inflation rewards are given to the sETH/ETH pool which incentivises liquidity provision to the sETH/ETH pair.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Since the last reduction of rewards, the peg has remain stable and sETH exposure to debt pool has gone down to around 30% of outstanding synths but is still relatively high. Currently we observed that gradual reduction of incentives (in sETH/ETH, Curve. iETH) has no adverse impact and we should continue to reduce the overall total of SNX rewards given for various incentives.

Also Aave has introduced a new utility for sETH/ETH liquidity providers. They are now able to stake their LP tokens as collateral to borrow stable coins, allowing them to leverage on their position. With the added utility, I believe the value proposition of being a sETH/ETH LP will remain strong even with the reduction in SNX incentives.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
