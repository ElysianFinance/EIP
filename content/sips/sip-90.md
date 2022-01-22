---
eip: 90
network: Ethereum
title: Transition EIPs/ECCPs to Snapshot Governance
status: Implemented
author: Andy T CF (@andytcf)
  https://research.elysian.finance/t/transition-eips-eccps-to-snapshot-governance/209
created: 2020-10-14T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->


Transition the current ECCP signaling process to off-chain signatures via snapshot [https://github.com/balancer-labs/snapshot](https://github.com/balancer-labs/snapshot).

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->


Use snapshot’s gas-less, off-chain governance platform [https://snapshot.page](https://snapshot.page) that will handle the ECCP/EIP signaling process of the Elysian Protocol. The platform will enable community members to create ECCP/EIP proposals which will be able to be voted on via IPFS messages/signatures. Proposals created on snapshot will feature quadratic voting and votes will be weighted based on the user’s debt percentage in the last fee period.

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

The current Elysian Governance signaling process is non-sybil resistant, easy to contest, and not a good indicator of community participation and sentiment.

Since EIPs/ECCPs handle the configuration and improvement of vital aspects of the Elysian Protocol, it is essential to ensure that the proposals being implemented are in the best interest of the wider community and the process in gauging this interest should be hard to contest and accurate.

Existing EIPs/ECCPs are carried out in the #governance-polls channel in the official Elysian discord. Discord polls are easy to manipulate via a Sybil attack (creating multiple discord accounts) since the weight of a single vote is directly mapped to the existence of a unique discord account. On top of this, discord polls do not maintain an accurate history of participation and votes, where each vote on a poll is reversible.

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

In order to improve the Sybil-resistance of the Elysian Governance process, we will use snapshot’s off-chain, gas-less solution to enable an wallet based voting system, where each user's vote will be weighted based on their debt percentage in the previous fee period. The weights calculated in this way will also be quadratically modified to implement a quadratic voting system to increase the equality of votes.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The selection of snapshot’s platform for handling the EIP/ECCP governance process was due to factors such as the widespread usage amongst other projects, the gas-less nature of voting and the great usability of the platform. Factors which all supplement the improved Sybil resistance of the Elysian Governance process.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).