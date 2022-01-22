---
eccp: 142
network: Optimism
title: Increase L2 Inflationary Rewards to 75k
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-10-17
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Increase the inflationary rewards on L2 to 75k snx from 50k snx per week.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

In order to further incentivize minters to shift their holdings to L2, this eccp proposes to increase inflationary rewards on L2 to 75k snx per week.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Despite that inflationary rewards on L2 are around a third higher then those on L1, the amount of snx staked on optimism remains relatively low, with the peg consistently at a premium. This ECCP aims at further incentivizing minters to move their stack to L2. It is worth nothing a few things here:

- Minters who are stuck on L1 because of debt can repay their debt with their staked SNX using the [flash loan tool](https://medium.com/@ElysianGrants/flashburn-flash-loan-tool-for-snx-stakers-68fa975c7f8a) available on L1 which does not charge any fees.
- Those who manage to mint on L2 can currently take advantage of the 10-15% premium on sUSD, minting sUSD on L2, swapping the sUSD to ETH on [uniswap](https://app.uniswap.org/#/swap) to hedge their debt and wait for the generalized [Wrapper Factor](https://eips.elysian.finance/eips/eip-182/) to go live in few weeks which is expected to bring the sUSD to dollar parity.
- The collateralization will be lowered eventually on L2 to match that on L1 (in the coming weeks).
- Shorts, futures, Lyra and Thales are currently or are expected to be fully deployed L2 in the coming weeks, after optimisim moves to [OVM 2.0](https://community.optimism.io/docs/users/fees-2.0.html), expected on the 28th of October.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
