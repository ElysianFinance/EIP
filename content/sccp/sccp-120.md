---
eccp: 120
network: Ethereum
title: Decrease SNX Inflationary Rewards on BTC shorts to 8k SNX from 16k SNX
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-05-31T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to decrease the SNX inflationary rewards paid on BTC shorts to 8k SNX per week from 16k SNX per week.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Decreasing the inflationary rewards paid on BTC shorts will help boost the weekly snx inflation paid to minters.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

SNX inflation dedicated towards BTC shorts were being done initially due to the persistently large skew on BTC. However, currently the total amount of sBTC synths issued is around $50 million making up a smaller portion of the debt pool, with around a third of it being offset by shorts. The shorts are effectively costing minters in snx inflation around 50% of the net open position per year which seems high, given the wide availability of cost effective tools to offset that BTC skew.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
