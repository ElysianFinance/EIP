---
eccp: 128
network: Ethereum
title: Lower Target Collateralization Ratio from 450% to 400%
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-06-27T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Decrease the target Collateralisation Ratio for SNX stakers to 400%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Given the state of the peg, this eccp proposes to decrease the target collateralization ratio of SNX stakers to 400% from 450% currently.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The peg continues to be pressured as can be seen [here](https://www.curve.fi/trade/susdv2/SUSD-USDC/4h), this is mostly due to the reasons mentioned in [ECCP-127](https://eips.elysian.finance/ECCP/eccp-127). As can be seen on [stats](https://stats.elysian.finance/), the active c-ratio is 310%, the sUSD APY is above 10% and the SNX Staking APY at 40%, this means that a large proportion of minters are foregoing claiming all together.
This ECCP proposes to provide minters with some relief, by allowing them to acquire synths more cheaply and have them need to burn less sUSD in order to get their accounts in order.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
