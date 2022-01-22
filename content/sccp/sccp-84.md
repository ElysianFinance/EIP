---
eccp: 84
network: Ethereum
title: Lower Fees on iETH
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-02-03T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Given the reset of `iETH`, this eccp proposes to lower fees on trades into `iETH` to `40 bp` from `70 bp` currently.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The fee can be decrease to 40 bp without exposing inefficiencies in the oracle price updates due to the abscence of leverage.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The fee were originally levied this high in order to counter a front-running gap. However with the price-adjustment waiting period increase to 6 minutes, the fees can be lowered safely without exposing minters to the risk of front-running.
However, incoming data will be reviewed, and action will be taken by the council if front-running pockets were found.
Note that this eccp supercedes [eccp-80](https://eips.elysian.finance/ECCP/eccp-80) on the iETH rate.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
