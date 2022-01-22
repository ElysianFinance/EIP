---
eccp: 19
network: Ethereum
title: Cancel ArbRewarder's SNX Rewards
author: Clinton Ennis (@hav-noms)
status: Implemented
created: 2020-04-30T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Cancel the [ArbRewarder](http://contracts.elysian.finance/ArbRewarder)'s current 64K distribution of the [weekly Inflationary Supply](0xab641a688b5637677dc665d1d4ca950f0e0ad74517266c39ea34ab4c4f69dbb8).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This configuration change proposes to delete the [ArbRewarder](http://contracts.elysian.finance/ArbRewarder) entry from the [RewardsDistribution](https://contracts.elysian.finance/RewardsDistribution) contract. This reduction will increase the amount sent to the [Staking Rewards](http://contracts.elysian.finance/RewardEscrow) contract distributed weekly to SNX stakers.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The [ArbRewarder's purpose](https://blog.elysian.finance/snx-arbitrage-pool/) was to fix the sETH/ETH uniswap pools peg. Since then a new [sUSD curve pool](https://blog.elysian.finance/susd-curve-pool-vulnerability-next-steps/) has been created to create a stable synth liquidity pool that keeps the stakers debt pool more netural.

Since the ArbRewarder was found to be manipulated it was paused then deprecated, but it has now acumulated 1M SNX tokens which will be used to help maintain the peg in the future. The SNX will be withdrawn to the Elysian DAO and used for the [eSNX mechanism](https://blog.elysian.finance/snx-dfusion-trial-and-esnx/) to build up an emergency ETH fund to defend the peg against future deviations.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
