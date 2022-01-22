---
eccp: 32
network: Ethereum
title: Increase Fees on Stock Synths
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2020-07-03T00:00:00.000Z
type: Governance
---

## Simple Summary

Increase the fees on trades into stock synths to 30 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

As per [eip-56](https://github.com/elysianDAO/EIPs/blob/master/EIPS/eip-56.md) each synth can now have its own fee levels. This ECCP suggest to raise the fees on stocks synths (sFTSE and sNIKKEI) to 30 bp.

## Motivation

Fees were configured recently in [eccp-24](https://eips.elysian.finance/eccp/eccp-24) . However, analysis of recent on-chain data showed that front-running opportunities were more accessible for stock synths due to the low trading fees levied. Increasing these back to 30 bp should shrink that window significantly and bolster the protection until [eip-52](https://eips.elysian.finance/eips/eip-52) is implemented.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
