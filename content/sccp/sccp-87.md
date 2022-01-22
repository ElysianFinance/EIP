---
eccp: 87
network: Ethereum
title: Increase loans and shorts cap to sUSD 40 million
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-03-07T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

The current cap was configured to sUSD 30 million in [ECCP-85](https://eips.elysian.finance/ECCP/eccp-85) of which sUSD 28 million is currently utilized in shorts and borrows, so there is not much room for new users to take loans or shorts.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap can safely be increased to sUSD 40 million to allow more users to take loans and shorts.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The cap of sUSD 30 million has almost been reached. Given that we want to promote using the new shorting mechanism as a longterm replacement for iSynths staking, increasing the cap gradually we approach full utilization would be the prudent approach.
The breakdown of the program is as follows:

|         CCY         | sUSD Debt  |     % of Total      |
| :-----------------: | :--------: | :-----------------: |
|  **Total Borrows**  |  **$9M**   |       **32%**       |
|  sUSD Against ETH   |   $4.4M    |         16%         |
| sBTC against renBTC |    $25k    |         0%          |
| sUSD against renBTC |   $4.6M    |         17%         |
|  **Total Shorts**   | **$18.7M** |       **68%**       |
|        sBTC         |   $9.5M    |         34%         |
|        sETH         |   $9.2M    |         33%         |
|      **Total**      | **$27.7M** | **93% Utilization** |

Want to take the opportunity to mention that the loan program which can be accessed on this [portal](https://synthetix.surge.sh/) now display the liquidation price on shorts. Thank you Mitch!

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
