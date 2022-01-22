---
eccp: 98
network: Ethereum
title: Rebalance sDEFI and iDEFI
author: 'Farmwell (@farmwell), CryptoToit (@CryptoToit)'
status: Implemented
created: 2021-04-22T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

This ECCP proposes to rebalance the sDEFI and iDEFI index synths.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The proposal is to keep with a quarterly cadence of updating the index. The last re-balance occurred in late January, when SUSHI, 1INCH and BNT joined the index. sDEFI index gained 21% since the last rebalancing, trading at $16,391.95 as of time of writing.

This ECCP proposes for several new additions to sDEFI.

The new sDEFI embraces an open-arms approach. There are 20 assets in sDEFI v5, which is the most ever for the index. One of the reasons motivating this approach is that adding more assets makes the index more tamper resistant to price manipulation. A broader range of assets also gives more exposure to newer, smaller DeFi protocols like Cream and Alpha Finance.

The ECCP proposes the addition of the following assets:

- Terra’s LUNA
- Thorchain’s RUNE
- 0x’s ZRX
- Alpha Finance’s ALPHA
- Cream’s CREAM
- BarnBridge's BOND

Additionally, this ECCP proposes the sDEFI index synth to be paused from trading during the rebalance period. At the end of the rebalancing, the sDEFI will trade at roughly the same index price as it currently trades at. However, since this will effectively be a newly constructed product, some users may wish to exit the sDEFI prior to rebalancing.

The ECCP proposes the following weightages for each constituent of the index:

| % Weightage | Ticker |
| ----------- | ------ |
| 15.00%      | UNI    |
| 11.00%      | AAVE   |
| 10.00%      | LUNA   |
| 9.00%       | MKR    |
| 8.00%       | SNX    |
| 8.00%       | RUNE   |
| 7.00%       | SUSHI  |
| 7.00%       | COMP   |
| 6.00%       | YFI    |
| 3.00%       | BNT    |
| 3.00%       | UMA    |
| 2.50%       | ZRX    |
| 2.50%       | CRV    |
| 2.00%       | 1INCH  |
| 2.00%       | REN    |
| 1.00%       | BAL    |
| 1.00%       | KNC    |
| 1.00%       | BOND   |
| 0.50%       | CREAM  |
| 0.50%       | ALPHA  |

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The purpose of the updated sDEFI and iDEFI index synth is to attract traders wishing to gain exposure to the burgeoning DeFi sector. The asset inclusion criteria is whether or not a given project is considered by the Elysian community to be among tge most innovative projects in DeFi right now. As the DeFi space continues to move quickly it is quite possible for previously excluded assets to rejoin the index, as well as new entrants to find a place in the index.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
