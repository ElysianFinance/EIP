---
eip: 84
network: Ethereum
title: Pause Synths Below Open Interest Threshold
status: Implemented
author: 'Kain Warwick (@kaiynne), Jackson Chan (@jacko125)'
created: 2020-08-31T00:00:00.000Z
requires: 'https://eips.elysian.finance/eips/eip-83'
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Pause synths that are below the open interest threshold in order to reduce the gas costs of issuance, fee claiming and transfers. In addition for all traders with open positions at 10771675 sUSD will be paid to the value of the open position as compensation for having their position closed.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This EIP proposes to pause synths with a supply below `30k USD` until a new EIP can be implemented that leverages Chainlink to reduce the cost of calculating the debt pool. Pausing these synths will reduce the cost of minting and burning by as much as 75%. While this proposal is not ideal, it is important as without it the migration to external oracles will increase the cost of minting and burning by more than 50%.

We propose to freeze the prices of synths below the open interest threshold of `30k USD`, we will then purge them into `sUSD` and temporarily disconnect them until we can get a workaround implemented [eip-83](https://eips.elysian.finance/eips/eip-83).

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

In the current gas environment minting and burning costs can reach \$50 USD per tx or higher. This is because the protocol needs to know the size of the debt pool, and it is calculated by summing up the `USD` value of all 40+ synths `totalSupply`.

With the migration to decentralized oracles in [EIP-36](https://eips.elysian.finance/eips/eip-36), there is even more additional gas costs of reading state from external contracts via the `CALL` opcode for each and every synth, along with the existing `SLOAD` required to read contract state. These additional `CALL` codes impact issuance transactions by `5-100%`. By temporarily reducing the number of Synths we can reduce the gas costs below the current amount even after factoring in the increase.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the EIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

We will specificy a threshold for Synth open interest, any synth that falls below this threshold will be frozen and purged following the _Pollux_ release. [EIP-83](https://eips.elysian.finance/eips/eip-83) has been proposed that once implemented, will reduce gas such that these synths can be resumed. The changes will allow us to significantly expand the range of support synths without incurring incremental gas costs.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Once temporarily reducing the number of Synths was deemed necessary we needed to choose a mechanism for removing them. While many of the the synths below the threshold have minimal open interst several have `10-45k USD` in value, in order to minimise the impact to holders purging them into `sUSD` was deemed the optimal path. The alternative is to freeze the price and leave the Synths disconnected until such time as they could be reconnected and the price updated. The issue with this approach is that a holder would be unable to exit the position until the synth was reconnected expositing them to price volatility with no means of exit.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

The table below reflects the Synths (and their inverses) that would be paused based on a threshold of 50k USD.

|   Synth | Open Interest |
| ------: | ------------: |
|    sEOS |     27,165.32 |
|    sCEX |     24,556.73 |
|    sTRX |     18,874.18 |
|   sFTSE |     11,836.85 |
|    sJPY |      9,467.44 |
|    sXMR |      9,215.42 |
|    sCHF |      1,725.99 |
|    sETC |      1,112.68 |
|    sGBP |        453.27 |
| sNIKKEI |          93.1 |
|   sDASH |          87.8 |

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

TBD

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
