---
eccp: 136
network: Optimism
title: Increase L2 Inflationary Rewards to 50k
author: Michael Spain (@mjs-12)
status: Implemented
created: 2021-08-20T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Increase the inflationary rewards on L2 to 50k per week.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

With the implementation of [EIP-170](https://eips.elysian.finance/eips/eip-170), there is currently 25k SNX distributed to L2 per week from the inflationary supply. This ECCP proposes increasing that amount to 50k per week, to incentivise stakers to begin migrating to L2.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Since exchanging is now live on L2, it makes sense to begin slowly increasing the sUSD supply. Currently there is only ~5.7M sUSD.

Increasing the inflationary rewards will allow the sUSD supply to begin expanding slowly, whilst the L2 rollout is still protected via high c-ratio, which is currently at 1000% (pending a reduction to 900% as seen in [ECCP-134](https://eips.elysian.finance/eccp/eccp-134)).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
