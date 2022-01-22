---
eccp: 125
network: Ethereum
title: Remove SNX Inflationary Rewards on BTC shorts
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-06-16T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to remove SNX inflationary rewards paid on BTC shorts.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Removing the inflationary rewards paid on BTC shorts will help reduce the pressure on the peg, since as shorts are closed the supply of sUSD available should increase (due to the collateralization ratio).

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The main motivations of this ECCP are as follows:

- To relieve the peg pressure, as sUSD is being locked in the contract in order to open short positions.
- To reduce the negative sETH skew on the debt pool as depicted in this [chart](https://ibb.co/yh5j8VZ), as ETH and BTC are highly correlated. The logic behind this is that investors will acquire sBTC and burn it to close their short positions. These transactions will result in no change in the sBTC skew. However, the supply of free floating sUSD will help with the sUSD peg and open up some arbs towards sETH or sBTC, providing minimal relief to the negative sETH skew.
- To increase efficiency of the use of SNX inflation, as the currently SNX would be going to minters as part of the weekly claim escrowed for a year.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
