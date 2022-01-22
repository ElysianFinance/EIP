---
eccp: 101
network: Ethereum
title: Decrease Cap on sUSD and sETH loans
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-05-12T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to lower the cap on both the old sUSD and sETH loan contracts (`0x7133afF303539b0A4F60Ab9bd9656598BF49E272` and `0xfED77055B40d63DCf17ab250FFD6948FBFF57B82`) to 1 sUSD and 1 sETH .

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Decreasing the cap on the old sUSD and sETH will effectively make it not possible to mint fresh synths with ETH.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The cap decrease is in preparation of the deployment of the wrappr contract [EIP-112](https://eips.elysian.finance/eips/eip-112) which is expected to increase the supply of sETH. However, to allow for a smooth deployment, pockets of excess sETH capacity need to be closed, which will allow us to calibrate the `mintingFee` and `cap` on the wrapper at a later stage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
