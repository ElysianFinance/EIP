---
eccp: 24
network: Ethereum
title: Setting initial differential fee levels
author: Spreek (@Spreek)
status: Implemented
created: 2020-06-04T00:00:00.000Z
requires: EIP-56
type: Governance
---

## Simple Summary

Per [EIP-56](https://github.com/elysianDAO/EIPs/blob/master/EIPS/eip-56.md), each synth can now have its own fee levels. In this ECCP, we set initial fee levels based on which category a synth belongs to.

## Abstract

**Old fees**:
30 bps (0.3%) for all synths

**New fees**:

- Forex synths: 5bps (0.05%)
- Commodity synths: 5bps (0.05%)
- Equity synths: 5bps (0.05%)
- Crypto synths: 30bps (0.3%)
- Inverse crypto synths: 30bps (0.3%)

## Motivation

Fees chosen by vote in discord. Crypto synths were deemed to be riskier/less efficient as well as having relatively high fees on other exchanges. We chose to lower fees on forex/commodity/equities synths in recognition of the lower spreads/fees in those markets and in hopes of spurring more adoption/trading volume on those synths.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
