---
eccp: 114
network: Ethereum
title: Lower the Wrppr MintFeeRate to 25 bp from 37.5 bp
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-05-26T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to lower the wrappr mintFeeRate to 25 bp from 37.5 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Setting the minting fee at 25 bp will effectively open up arbitrage opportunities on [curve](https://curve.fi/trade/seth/SETH-ETH/1h) and will help with synths peg alignment.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Lowering the `mintFeeRate` to 25 bp will help with the sETH peg, as well as ensure that snx stakers reap a large part of the benefit from the arbitrage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
