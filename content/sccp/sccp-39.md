---
eccp: 39
network: Ethereum
title: Increase Forex Fees
author: Spreek (@Spreek)
status: Implemented
created: 2020-08-01T00:00:00.000Z
type: Governance
---

## Simple Summary

Increase the fees on trades into currency synths.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

As per [eip-56](https://github.com/elysianDAO/EIPs/blob/master/EIPS/eip-56.md) each synth can now have its own fee levels. This ECCP suggest to restore the fees on all currency synths (sUSD, sEUR sJPY, sAUD, sGBP, sCHF) to their old level of 0.3%

## Motivation

Analysis of data shows continued danger from frontrunning in traditional synths. When we introduced differential fees in EIP 56, we chose to reduce fees on traditional synths, thinking that the lower volatility synths would be less risky. However, due to lag from chainlink oracles, we see continued profitable trading in these pairs. Therefore, until a new solution, we should at least temporarily restore fees to their old level of 0.3%.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
