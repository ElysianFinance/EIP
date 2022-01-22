---
eccp: 157
network: Optimism
title: Update sETH/ETH Wrappr Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-12-14
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/Qmdd72qwHGiwz5k8ADJd9vEJRxCgDZE1Rzjd3EzH8TsjZR
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to update the following parameters on the sETH wrappr on L2:

- Lower the minting fee to 150 bp
- Increase the max capacity by 1,000 ETH to 3,200 ETH

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The minting fee is paid upon minting sETH with ETH and helps somewhat restrict the supply of synth. The sETH cap sets the maximum amount of sETH that can be minted by the wrappr.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

With [EIP-195](https://eips.elysian.finance/eips/eip-195/) going live on L2 the proposed changes laid out in this ECCP will permit liquidations to take place regardless of the liquidity of ETH/sUSD on L2. Lowering the minting fee will ensure that users who want to procure sETH, would route their trades through the exchange (earning minters fees) and ensures that some sETH minting capacity remains available for liquidation purposes.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
