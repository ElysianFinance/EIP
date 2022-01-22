---
eccp: 77
network: Ethereum
title: Update sDEFI and iDEFI
status: Implemented
author: 'Farmwell (@farmwell), CryptoToit (@CryptoToit)'
created: 2021-01-21T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

It is proposed to update the composition of the sDEFI index synth. The DeFi space moves quickly. The index tracking DeFi should reflect the rapid pace of innovation and development.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

In light of efforts to make the sDEFI and iDEFI index products reflect the rapidly changing DeFi sector, the proposal is to keep with a quartlerly cadence to update the index by adding and removing components while rebalancing the index composition.
This ECCP provides for adding to sDEFI:

- SushiSwap's SUSHI
- 1inch.exchange's 1INCH
- Bancor's BNT

This ECCP further provides for removing from sDEFI:

- Wrapped version of Nexus Mutual, wNXM

Additionally, this ECCP proposes the sDEFI index synth to be paused from trading during the rebalance period. At the end of the rebalancing, the sDEFI will trade at roughly the same index price as it currently trades at. However, since this will effectively be a newly constructed product, some users may wish to exit the sDEFI prior to rebalancing.

The Elysian Council was presented with three different options for weighting the index.
The Council in principle agreed to the following proposed weightage:

| % Weightage | Ticker | Units   |
| ----------- | ------ | ------- |
| 15.00%      | AAVE   | 4.72    |
| 15.00%      | SNX    | 87.20   |
| 15.00%      | UNI    | 100.71  |
| 10.00%      | MKR    | 0.54    |
| 5.00%       | YFI    | 0.01604 |
| 5.00%       | SUSHI  | 43.11   |
| 5.00%       | COMP   | 1.55    |
| 5.00%       | UMA    | 26.06   |
| 5.00%       | REN    | 680.59  |
| 5.00%       | CRV    | 254.95  |
| 5.00%       | KNC    | 334.06  |
| 5.00%       | BAL    | 14.84   |
| 2.50%       | 1INCH  | 71.83   |
| 2.50%       | BNT    | 90.66   |

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The purpose of the updated sDEFI and iDEFI index synth is to attract traders wishing to gain exposure to the burgeoning DeFi sector.

Some have claimed the January is month 6 of a 36 month DeFi bear market, while numerous ALT/USD pairs have nevertheless appreciated considerably since last fall.

The goal of the index is to provide exposure to the most innovative projects in DeFi right now. As the DeFi space continues to move quickly it is quite possible for previously excluded assets to rejoin the index.
BNT is an example of this. In previous indices, BNT was removed. In the latest iteration BNT managed to get back into the index.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
