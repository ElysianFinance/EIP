---
eip: 87
network: Ethereum
title: Add iETH incentive to RewardsDistribution
status: Implemented
author: Clinton Ennis (@hav-noms)
created: 2020-08-31T00:00:00.000Z
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->
Decrease the sDAO funded iETH SNX rewards incentive from 32k SNX to 0k SNX per week and add it to the RewardsDistribution contract from the inflationary supply.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
The iETH trial incentive has run for several months being paid by the synthetixDAO at a consistent rate of 32,000 SNX per week. Given the value of this incentive in balancing the debt pool the iETH incentive should be included in the weekly inflationary supply rewards distribution.

Configure the [RewardsDistribution](http://contracts.elysian.finance/RewardsDistribution) to add the iETH contract address to automate the distribution of SNX weekly. The amount is to be determined by an ECCP.

## Motivation
<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->
The synthetixDAO cannot fund this incentive forever and the iETH incentive mechanism is important to all SNX stakers to help netualize the shared debt pool.

With [ECCP-42](https://eips.elysian.finance/eccp/eccp-42) proposing to reduce sUSD SNX incentive from 24K to 8K there is no negative impact on SNX stakers weekly staking rewards.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).