---
eccp: 90
network: Ethereum
title: Update priceDeviationThresholdFactor to 1.6
status: Implemented
author: Kaleb  (@kaleb-keny)
created: 2021-03-22T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Update the `priceDeviationThresholdFactor` in the `SystemSettings` contract to 1.6x from 3x.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Given the imminent increase in the number stock synths, this eccp proposes to tighten `priceDeviationThresholdFactor` to a value of 1.6x, in order to safeguard against the event of a significant increase in synth price following a reverse stock split.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

As explained in [EIP-65](https://eips.elysian.finance/eips/eip-65) the decentralized circuit breaker aims at preventing irrecoverable loss on minters by halting the exchange on a synth, if it's price increases or decreased by the `priceDeviationThresholdFactor`, with respect to the price at the previous exchange. The current factor, as currently configured, would trigger only if the price were to increase or decrease by 3x, which is too wide to cater fo a 2-for-1 stock split or 1-for-2 reverse stock split, in which the price respectively, halves or doubles. Therefore, updating the `priceDeviationThresholdFactor ` to 1.6x would tighten the band enough for the mechanism to trigger in this scenario and more extreme scenarios.

The table below shows the upper and lower bands that trigger the decentralized circuit breaker with `priceDeviationThresholdFactor` set at 1.6x and 3x, for a synth having an initial price of 100.

| priceDeviationThresholdFactor | 1.6X |  3X   |
| ----------------------------- | :--: | :---: |
| Lower Bound                   | 62.5 | 33.33 |
| Upper Bound                   | 160  |  300  |

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
