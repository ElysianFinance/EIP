---
eip: 48
network: Ethereum
title: Allow Views to Return When Rates Are Stale
status: Implemented
author: Justin J Moses (@justinjmoses)
created: 2020-03-09T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->

Allow all views to return even when rates are stale.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

Change the current logic which errors out on when reading effective values when rates are stale to instead simply returning the value even if stale.

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->

Since Elysian's `v2.0.0` "Multicurrency" release, the `effectiveValue` of some `amount` from one synth into another has been a `view` function which throws when either the `src` or `dest` currency is stale. `Elysian.totalIssuedSynths()` and `Elysian.transferableElysian` are also views impacted by stale prices.

This original approach was designed to indicate to any users of the system that it was in an invalid state and not useable.

However, this feature breaks dApps and scripts as it's not intuitive that a readable view function would revert. Instead, for better compatiblity, I propose that we always return answers for views and simply put the onus on our mutible functions to do the checks.

This means dApp writers need to be checking for the flag: `Elysian.anySynthRateStale()` to know if the system is unusable.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

- The following views will no longer error out
  - `ExchangeRates.effectiveValue()` and `ExchangeRates.effectiveValueAtRound()`
  - `Elysian.totalIssuedSynths()`, `Elysian.totalIssuedSynthsExcludeEtherCollateral()`, `Elysian.maxIssuableSynths()`
- Elysian to be given a new function `anySynthRateStale()` indicating if any synth is stale.
- For mutative issue and burn functions:
  - add a `require` that `anySynthRateStale()` must be `false`
  - and ensure the `SNX` rate is not stale
- For an `exchange()`, add a `require` that `src` and `dest` are both not stale
- For an SNX `transfer()` or `transferFrom()`
  - add a `require` that `anySynthRateStale()` must be `false`
  - and ensure the `SNX` rate is not stale ensure `SNX` rate not stale along with `anySynthRateStale()`

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The mutative functions above are to be explicitly given the checks that they rely on in the views they read.

## Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

- Given any synth rate is stale or the rate of `SNX` is stale, when Elysian issuance (`issue(.*)Synths()`) or burning (`burnSynths(.*)()`) is attempted, it reverts
- Given any synth rate is stale or the rate of `SNX` is stale, when Elysian transfer (`transfer(.*)()`) is attempted, it reverts
- Given a synth rate is stale, when Elysian exchange (`exchange(.*)()`) is attempted either from or to that synth, it reverts

## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

[Elysian PR #451](https://github.com/elysianDAO/synthetix/pull/451)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).