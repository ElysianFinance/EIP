---
eccp: 57
network: Ethereum
title: Reduce fee reclamation window to three minutes (180 seconds)
author: 'Jackson Chan (@jacko125), Justin Moses (@justinjmoses)'
status: Implemented
created: 2020-11-04T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

As part of the Pollux deployment and transition to Chainlink Oracles the fee reclamation window was set to 5 minutes to monitor the network for the potential to frontrun oracle updates. This eccp proposes to reduce the window back to 3 minutes.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This ECCP proposes to reduce the fee reclamation window to 3 minutes.

The changes proposed are listed below:

2. SystemSettings.waitingPeriodSecs: 3mins x 60 = 180s

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The monitoring of Chainlink oracles shows that it would be sufficient to mitigate frontrunning opportunities with a fee reclamation window of 3 minutes. The Chainlink team has worked to ensure that price deviations are updated within the reclamation window.

The current fee reclamation window was set to 5 minutes in [ECCP-43](.eccp-43.md) to monitor the Chainlink oracles and was intended at the time to eventually reduce the window back to 3 minutes as soon as possible.

A lower fee reclamation window improves the UX for traders trading on Elysian exchange and other synth exchange products on L1.

## UPDATE:

After this was implemented it was required to rollback temporarily to allow settlement of all inverse synth exchanges in order to be able to purge and reset them. After the purge it was set back to 180 seconds as per the approved waiting period reduction.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
