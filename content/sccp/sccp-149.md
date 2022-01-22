---
eccp: 149
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-12-04
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmfT54sArTW7CupTKQSycR6hpPyBZcmNBYdFjHuDj6Qj2g
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to increase the volume per block on all atomic exchanges to sUSD 5 million per block.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap sets the maximum synth exchange volume per block in sUSD being traded using the atomic exchange contract.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to improve the attractiveness of the atomic exchange product, as larger block trades make more financial sense for arbing and trading on L1, given the gas fees. Analysis done shows that is relatively safe to increase the volume per block without increasing the risk on the snx stakers significantly.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
