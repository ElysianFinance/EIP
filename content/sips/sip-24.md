---
eip: 24
network: Ethereum
title: Terminal SNX Inflation
status: Implemented
author: >-
  Vance Spencer (@FrameworkVance), Deltatiger (@deltatigernz), Michael Anderson
  (@meanderson)
created: 2019-10-25T00:00:00.000Z
requires: Inflation Smoothing (EIP-23)
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->

This proposal will add a perpetual 2.5% APR annual inflation of SNX starting on September 6, 2023, the 235th week on the SNX inflation schedule.

This EIP is the formal spec successor of deltatiger's [Draft EIP Proposal #36](https://github.com/elysianDAO/EIPs/issues/36), specifically pertaining to terminal inflation.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

- Terminal inflation is an important mechanism to keep the SNX protocol stable in perpetuity
- With the original inflation schedule, weekly inflation drops from 90.1K to 0 on March 13, 2024
- With inflation smoothing as described in [EIP-23](https://github.com/elysianDAO/EIPs/blob/master/EIPS/eip-23.md), weekly inflation drops below 2.5% on August 30, 2023

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->

Perpetual weekly inflation serves as a mechanism to keep the protocol stable for the long term

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

Adjust [SupplySchedule.sol](https://github.com/elysianDAO/synthetix/blob/master/contracts/SupplySchedule.sol) to account for the following changes:

- Starting on August 30, 2023, the weekly issuance of SNX tokens will adjust to 2.5% on an annualized basis.
- This [final model](https://docs.google.com/spreadsheets/d/1a5r9aFP5bh6wGG4-HIW2MWPf4yMthZvesZOurnG-v_8/edit#gid=0), which is based on the [origional proposed model](https://docs.google.com/spreadsheets/d/1rVXFnZSMvHEv5XpA5Q23x-cXEo7w-2T80wlAfT-YbuI/edit#gid=1445735519), will stay in place until it is stopped or adjusted.

With Inflation Smoothing and 2.5% annual Terminal Inflation:
![image](https://user-images.githubusercontent.com/55753617/69513159-b38a8000-0efb-11ea-894e-2a89064a0998.png)

![image](https://user-images.githubusercontent.com/55753617/69513160-b38a8000-0efb-11ea-9a96-4cfa95eb8ccd.png)

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Perpetual weekly inflation serves as a mechanism to avoid scenarios that would adversely impact the protocol like:

- Minters packing up at the same time due to a lack of rewards
- Synth supply shrinking
- SNX unlocking to be sold down
- SNX price dropping
- sETH LPs getting their income halved and also now dropping in value
- sETH LPs exiting by withdrawing and converting sETH to ETH
- sETH getting smashed out of peg
- Arb pool being unattractive as SNX drops relative to ETH

## Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

Standard test cases for Solidity contract compling and deploying onto Ethereum testnets before updating the contract on mainnet.

## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

- Update and deploy [SupplySchedule.sol](https://github.com/elysianDAO/synthetix/blob/master/contracts/SupplySchedule.sol) to Ropsten, Rinkby, and Kovan
- Update and deploy changes to proxy contracts that reference SupplySchedule.sol on Ethereum testnets
- Update and deploy [SupplySchedule.sol](https://github.com/elysianDAO/synthetix/blob/master/contracts/SupplySchedule.sol) to Ethereum mainnet
- Update and deploy changes to Ethereum mainnet proxy contracts that reference SupplySchedule.sol

### Compounding weekly effects on terminal inflation rate of 2.5% APR

As weekly supply is compounded weekly using a compound formula with a terminal rate of 2.5% APR, the effective rate of inflation compounded weekly over a year is 2.53% APY.


![Formula](assets/eip-24/formula.png)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).