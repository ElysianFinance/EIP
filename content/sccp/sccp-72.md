---
eccp: 72
network: Ethereum
title: Inverse Synths Leverage Fee Adjustment (iBNB)
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-01-03T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Adjust fees on trades into `iBNB` from 100 bp to 210 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to adjust fees on trades into `iBNB` as the leverage has increased significantly over the course of the day.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Leverage on `iBNB` was around 1x a week ago and has increased to above 2x, as `iBNB` prices decreased to around sUSD 20 per `iBNB`. This makes it more possible to front-run the delayed oracle price push. Therefore, increasing fees to account for the leverage would help close that gap.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
