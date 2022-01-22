---
eccp: 152
network: Optimism
title: Increase LUSD Wrappr cap to 50m sUSD (L2)
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-11-23
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmYayoLoGVU4xdSkYeqX2rxrn5zG5GcfPJJvzVjR9aBu3T
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Increase cap on the LUSD Wrappr to 50 million sUSD.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This ECCP proposes to increase the cap on the LUSD wrappr to 50 million sUSD in order be able to unwind the DAI wrappr, while preserving the stability of the sUSD peg against stables.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The DAI wrappr, which currently holds 30 million DAI, needs to be unwound as per [ECCP-150](https://eips-geil88lvh-synthetixio.vercel.app/eccp/eccp-150/). However, the LUSD wrappr capacity is around sUSD 25 million sUSD.
Therefore, this ECCP proposes to increase the LUSD wrappr to 50 million sUSD, which will allow us to unwind the collateral in the DAI wrappr while maintaining a certain amount of capacity buffer in the LUSD on-ramp.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
