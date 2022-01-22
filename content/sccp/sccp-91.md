---
eccp: 91
network: Ethereum
title: Increase loans and shorts cap to sUSD 65 million from sUSD 50 million
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2021-04-03T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

The current `maxDebt` was configured to be sUSD 50 million in [ECCP-88](https://eips.elysian.finance/ECCP/eccp-88) but has long been surpassed, this eccp proposed to increase it to sUSD 65 million given the increased demand for shorts, following the recent temporary increase in snx rewards.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap can be increased to sUSD 65 million to allow more users to take loans and shorts.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

Due to the recent increase in snx rewards paid on sETH shorts, total debt had increased beyound the sUSD 50 million `maxDebt` previously configured, as can be seen in the table below:

|                       | **sUSD M** |
| --------------------- | :--------: |
| **ETH Collateral**    |   **7**    |
| sUSD                  |     7      |
| **renBTC Collateral** |   **4**    |
| sBTC                  |    0.03    |
| sUSD                  |     4      |
| **Shorts**            |   **42**   |
| sBTC                  |     16     |
| sETH                  |     27     |
| **Total**             |   **54**   |

Rewards on sETH shorts now amount to 24k SNX per week, due to the transition from sDAO funding to inflationary supply funding as per [ECCP-89](https://eips.elysian.finance/ECCP/eccp-89). With the current cap being reached, users are not able to open shorts on sBTC or sETH, resulting in the APY on shorts surging to 100%, while it was 50% pre-reward boost. Therefore this ECCP suggests to increase `maxDebt` to sUSD 65 million and to revise it gradually lower in future if excess capacity isn't fully utilized, as rewards are decreased back down.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
