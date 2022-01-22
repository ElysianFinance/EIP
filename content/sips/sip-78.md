---
eip: 78
network: Ethereum
title: iSynth limit reset must not trip circuit breaker
status: Implemented
author: Justin J Moses <@justinjmoses>
  https://research.elysian.finance/t/eip-78-isynth-limit-reset-must-not-trip-circuit-breaker/181
created: 2020-08-19T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Ensure the repricing of an iSynth does not trigger the decentralized circuit breaker.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the EIP is implemented, not *why* it should be done or *how* it will be done. If the EIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

When the protocolDAO resets an iSynth, it must also update the pricing for the iSynth in the last exchange price tracker in the `Exchanger` contract.

## Motivation

<!--This is the problem statement. This is the *why* of the EIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the EIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the EIP will address the issue!-->

[EIP-65](./eip-65.md) introduced a decentralized circuit breaker which is tripped when a price on-chain is detected more than some given factor. When an iSynth is reset with a new `entryPoint` however, this changes the price quite significantly, and can trip the circuit breaker when there is a previous `lastExchangeRate` in `Exchanger` for that synth. This makes the synth unusable unless the factor is bumped up sufficiently to handle the iSynth repricing (or any iSynth repricing if many are performed simultaneously), and since the factor setting is system-wide, a much higher factor makes EIP-65 less useful overall.

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

When the protocolDAO resets an iSynth, the `lastExchangeRate` in `Exchanger` must be updated to the current iSynth rate with the latest `entryPoint`, to indicate a refreshed price for the synth.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The protocolDAO already has the power to invoke `ExchangeRates.setInversePricing()`. It's at this point that the `Exchanger` must be told to update any previous exchange rate with the one calculated at the time of repricing.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Elysian currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

- Given `iETH` is an inverse synth tracking `ETH`
- And there exists a previous exchange into or out of `iETH`, ensuring `Exchanger.lastExchangeRate(iETH)` has an entry
- When the protocolDAO invokes setInversePricing, changing the rate more than the `Exchanger.priceDeviationThresholdFactor`
- And a user exchanges into or out of `iETH`
- Then the exchange completes successfully and `iETH` is not suspended due to a price spike

### Configurable Values (Via ECCP)

<!--Please list all values configurable via ECCP under this implementation.-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).