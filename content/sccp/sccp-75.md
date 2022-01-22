---
eccp: 75
network: Ethereum
title: Inverse Synths Leverage Fee Adjustment (iLINK)
author: Kaleb (@kaleb-keny)
status: Rejected
created: 2021-01-10T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Adjust fees on trades into `iLINK` from 100 bp to 215 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to adjust fees on trades into `iLINK` to 215 bp as the increased leverage could result in a potential front-running gap.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

`iLINK` fees were initially set at 100 bp, given that historically matching the link push frequency would not open any front-running gap. However, given the increase in leverage which currently stands at around 2.1x, fees need to be raised accordingly.
The leverage on `iLINK` will be monitored and if the front-running gap were to recede, I would propose to lower fees back down. Furthermore, when `iLINK` is reset, fees would be proposed to be lowered back down to current level.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
