---
eip: 93
network: Ethereum
title: Supersede EIP-90 to Delegated Council Governance
status: Implemented
author: Andy T CF (@andytcf)
  https://research.elysian.finance/t/supersede-eip-90-to-delegated-council-governance/227
created: 2020-11-11T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This EIP proposes to supersede the current ECCP signaling process outlined in [EIP-90](./eip-90.md), with an extended version that features a delegated voting system. Delegated voting is more in line with the preexisting Elysian Governance framework on [Discord](https://discord.com/invite/AEdUHzt) while also providing the benefits of Snapshot voting.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Following [EIP-90](./eip-90.md), the existing Snapshot space will be renamed to the “Elysian Council” while an additional snapshot space called “Elysian Proposals” will be created.

Each space will still have the benefits provided by using Snapshot as covered in [EIP-90](./eip-90.md), however, the strategies and purposes of each space are outlined below:

- Elysian Council - houses the election process of Elysian Council members, will use the existing weighted debt strategy as outlined in [EIP-90](./eip-90.md).
- Elysian Proposals - a space where proposals will be voted on by Elysian Council members. Council members are assigned 1 vote each.

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

The current implementation of EIP-90 was too large of a paradigm shift from historical forms of Elysian Governance, reducing the influence of individuals who have alternative skin-in-the-game (reputation) while providing large SNX holders with a disproportionate amount of voting weight reducing the influence of the majority of token holders.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high-level overview of *how* the EIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

There are two major components of the new proposed governance system:

1. Elysian Council
2. Elysian Proposals

- Elysian Council - As a result of EIP-90, we have transitioned into a system that was previously "1 identity = 1 vote" to "1 identity = N votes" while also removing individuals who possess alternative skin-in-the-game from the governance process. The Elysian Council will consist of nominees who are voted in by the Elysian token holders, re-enabling the influence of community representatives who are able to debate and distill technical changes while also not directly providing large SNX holders a disproportionate voting weight in the outcome of proposals.

- Elysian Proposals - Changes in the protocol (initially ECCPs, but eventually EIPs) that are submitted to the [EIPs Github repository](https://github.com/elysianDAO/EIPs) will be posted on the Elysian Proposal space. Proposals must reach an supermajority agreement on a option for it to be enacted.

**Liquid Democracy**

Within a Council Epoch, votes are liquid, so voters can remove or change their votes at any time.

If a Council Member loses enough votes during a Council Epoch to below a non-member, then the protocolDAO will manually retrieve the NFT from the departing Council Member and issue it to the new Council Member, giving them Council voting rights. This is a manual process, so there may be some lag before the protocolDAO carries this out. The protocolDAO will check the election standings before implementing any successful ECCP (or, in the future, EIP).

**Council Payments**

Initially, SNX payments to Council Members will be paid manually by the synthetixDAO at the end of a Council Epoch, but there are plans to move to a streaming process. In the case of sufficient Council Member’s votes being pulled out before the end of a Council Epoch to remove them from the Council, they will receive SNX rewards proportionate to their time in the Council during that Epoch, up until the point at which their NFT is retrieved. The replacement Member will receive SNX rewards proportionate to their time in the Council after which their NFT is issued.

**pDAO Discretion**

Despite the council reaching a consensus on a proposal, the protocolDAO still retains discretion over any changes to the protocol in this version of governance if required. However, this is only a last resort in case of emergency — the processes should all be optimised to minimise this potential occurence. Indeed, all of EIP-93 is intended to minimise the protocolDAO's discretion.

**Meta-Governance**

Any ECCP's that relate to configuring the values of this EIP will need to be voted on by the Elysian Council members. In order for this ECCP to pass, the Elysian Council must reach an unanimous decision.

![Example Timeline](assets/eip-93/example-timeline.png)

Above is the example timeline for the genesis election, with helps understand the terminology of configurable values.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

From the feedback acquired in EIP-90 discussions, alternate designs included increasing the quadratic weighting to cubic, considering time when weighing the debt, calculating escrowed balances and other similiar ideas.

Although many of these solutions are valid in reducing the impact of large SNX holders, their outcomes are too different from the status quo of the preexisting governance structure.

The current use of the Elysian Council is more in line with the future goal of delegated voting within the Elysian system and this EIP aims to slowly iterate towards it.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

- Protocol DAO (pDAO) will need to create a modified version (or custom contract) of an NFT which can be revoked and issued to EOA’s (Externally Owned Addresses), signifying a wallet is part of the Elysian Council.
- Modifications to the current “Elysian” space on Snapshot, to house the Elysian Council Election process.
- Addition of a new “Elysian Proposal” space that utilizes a new strategy to explicitly count the pDAO issued NFT.

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

- Council Nominations Deadline - initially set at 48 hours prior to when the Election Period begins.
- Election Period Length - at the end of the Election Period the council members will be issued NFTs (voters may still change their votes within the current Council Epoch).
- Council Epoch - the period after which token holders must redelegate their votes to new and existing council members (to prevent stagnation and ephemeral power) - initially set at 1 month with the genesis election being 1st December 2020 (0:00 UTC)
- Timelock period - period where the proposal is in review before being implemented, initially set at 24 hours.
- Elysian Council seat numbers - the number of seats available on the Elysian Council and thus a supermajority `(N/2 + 1 - if N is even or to Ceiling(N/2) - if N is odd)` is the required number for a decision to reach consensus.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).