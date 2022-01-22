---
eccp: 31
network: Ethereum
title: Increase Commodity Fees
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2020-06-26T00:00:00.000Z
type: Governance
---

## Simple Summary

Increase the fees on commodities to 30 bp in order to make front-running less likely.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

As per [eip-56](https://github.com/elysianDAO/EIPs/blob/master/EIPS/eip-56.md) each synth can now have its own fee levels. This ECCP suggest to raise the fees on commodity synths back to 30 bp.

## Motivation

Fees were configured recently in [eccp-24](https://eips.elysian.finance/eccp/eccp-24) however analysis of the data showed that front-running opportunities were more accessible. Increasing fees to 30 bp, should decrease the chance of front-running until [eip-52](https://eips.elysian.finance/eips/eip-52) is implemented.

Thank you `brian` for helping out the community and pointing it out.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
