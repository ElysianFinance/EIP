---
eccp: 44
network: Ethereum
title: Drop EtherCollateral fees to zero
author: Clinton Ennis (@hav-noms)
status: Implemented
created: 2020-09-01T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Drop [EtherCollateral](http://contracts.elysian.finance/EtherCollateral) fees to zero to allow sETH loans to be closed during the trial and incentise ETH holders to take loans.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The changes proposed are listed below:

1. EtherCollateral.setInterestRate: 0
2. EtherCollateral.setIssueFeeRate: 0

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

With the current demand of sUSD it is keeping sUSD above the $1 peg, see [sUSD Chart](https://www.coingecko.com/en/coins/susd/usd#panel). Any sUSD deposits into the [Depot](http://contracts.elysian.finance/Depot) are quickly arbed. EtherCollateral Depends on sUSD being available in the Depot to be able to close sETH loans as when a loan creators closes their sETH loan their sETH is burnt to unstake their ETH and a portion of their ETH is used to buy sUSD to send to the feepool as revenue for SNX holders.

As this is a light version of EtherCollateral trial the next version will not require the [Depot](http://contracts.elysian.finance/Depot) as a dependancy for sUSD purchases and will integate buying on market.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
