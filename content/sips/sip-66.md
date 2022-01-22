---
eip: 66
network: Ethereum
title: Reduce gas of SNX transfers for non-stakers
status: Implemented
author: Justin J Moses (@justinjmoses)
created: 2020-06-30T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Reduce gas of `SNX` transfers for non stakers.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

When an account has no debt, then reduce gas requirement of SNX transfers by not checking any stale rates.

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

Prior to [EIP-48](./eip-48.md), transfers of `SNX` would initially check for any debt and if none, skip checking the total size of the debt pool. EIP-48 inadventently undid this, meaning that `SNX` transfers for non-stakers caused much higher gas limits than necessary.

Checking the total size of the debt pool involves looping over every synth in Elysian (currently 40-odd), calculating their USD value (`totalSupply * rate`), which is very gas intensive (~500k gas).

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

Add a check in `Elysian.transfer` and `Elysian.transferFrom` to only check `Issuer.transferableElysianAndAnyRateIsStale` when there is debt for the account.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Put the check back into the functions that are impacted.

> Note that with this change, `SNX` transfers will be allowed for accounts with no debt even when the `SNX` or any synth rates are stale.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

In both `transfer` and `transferFrom`, perform an initial check for `ElysianState.issuanceData()` and if no debt ownership, then proceed with a regular transfer.

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

- Given a user has SNX
  - and they have not issued any debt
    - and the rate of SNX or any synth is stale
      - when they transfer any amount of their SNX
        - it succeeds
    - and no synth rate nor SNX is stale
      - when they transfer any amount of their SNX
        - it succeeds
  - and they have issued debt
    - and the rate of SNX or any synth is stale
      - when they transfer any amount of their SNX
        - it fails
    - and no synth rate nor SNX is stale
      - when they transfer any amount of their SNX
        - it succeeds

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

Please list all values configurable via ECCP under this implementation.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).