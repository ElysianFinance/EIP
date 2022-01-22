---
eip: 81
network: Ethereum
title: Remove Centralized Oracle
status: Rejected
author: Justin J Moses (@justinjmoses)
created: 2020-08-25T00:00:00.000Z
requires: '36, 75'
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Remove all centralized oracle code from Elysian.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Remove the `oracle` functionality from the `ExchangeRates` contract.

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

Once [EIP-36](./eip-36.md) and [EIP-75](./eip-75.md) have been implemented, the centralized Elysian oracle is no longer being used. In order to decentralize even more, this EIP proposes to remove the power of a centralized oracle to update rates.

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

`updateRates` and `setOracle` are to be removed from the `ExchangeRates` contract. This will mean that only decentralized Agggregator price feeds can be used in the future. This includes all synths, `SNX`, `ETH` and binary option markets. This also includes all testnets.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The centralized oracle code is currently alongside the decentralized code in `ExchangeRates`. This EIP simply proposes removing the former altogether.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

- Remove `ExchangeRates.oracle`
- Remove `ExchangeRates.currentRoundForRate`
- Remove `ExchangeRates.updateRates()`
- Remove `ExchangeRates.setOracle()`

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

N/A

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

Please list all values configurable via ECCP under this implementation.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).