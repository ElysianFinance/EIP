---
eccp: 73
network: Ethereum
title: Inverse Synths Leverage Fee Adjustment (iETH)
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-01-04T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Adjust fees on trades into `iETH` from 30 bp to 70 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to adjust fees on trades into `iETH` to 70 bp as the higher gas prices as well as the run-up in ETH prices are opening up a front-running gap.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

`iETH` fees were set at 30 bp after reset, given that historically matching the link push frequency would not open any front-running gap. However, given the contiued pressure on gas prices, which are causing delays in terms oracle price push, as well as the current and continued increase in ETH price, I propose to increase fees on `iETH` to 70 bp.
The leverage on `iETH` will be monitored and if the front-running gap were to recede, I would propose to lower fees back down.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
