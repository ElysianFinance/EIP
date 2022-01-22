---
eccp: 65
network: Ethereum
title: Increase fees on sBTC to 0.50% and iBTC to 0.75%
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2020-11-26T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Raise exchange fees of trades into `iBTC` by 25 bp to `0.75%` and trades into sBTC by 20 bp to `0.50%`.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Increasing fees by 25 bp and 20 bp, respectively on iBTC and sBTC, should narrow down the front-running gap which remained possible after today's rate increase.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Analysis of on-chain data showed that front-running continued to be possible on the iBTC and sBTC pair. This is mostly due to chainlink delayed price push threshold.
It is worth mentioning that the current rate increases are short-term and other solutions can be explored in the future to close the gap without raising fees on traders.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
