---
eccp: 71
network: Ethereum
title: Lower Fees on Frozen Inverse Synths
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-01-03T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged ECCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new ECCPs. Note that an ECCP number will be assigned by an editor. When opening a pull request to submit your ECCP, please use an abbreviated title in the filename, `eccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Lower exchange fees on inverses which had been frozen.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to lower fees levied on traders for trading into frozen iSynths.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

The fee increase to account for higher leverage managed to close the front-running gap. However, given that these inverse synths are expected to be reset this eccp proposes to lower the fees back to previous levels, aligned or slightly below the oracle push frequency.

|       | Oracle Push | Current Fee | New Fee |
| :---: | :---------: | :---------: | :-----: |
| iETH  |    0.50%    |    0.80%    |  0.30%  |
| iDEFI |    1.00%    |    1.50%    |  1.00%  |
| iADA  |    1.00%    |    1.50%    |  1.00%  |

Danijel (@dgornjakovic) developped this [site](https://synthetix-monitoring.herokuapp.com/synths) which should help the elysian council change the fees as necessary to account for higher or lower leverage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
