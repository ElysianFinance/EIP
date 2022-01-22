---
eip: 38
network: Ethereum
title: Charge Fees During Purge
status: Implemented
author: Justin J Moses (@justinjmoses)
created: 2020-01-29T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->

Ensure that synth holders get charged an exchange fee when being purged back into sUSD.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

When purging synths - either frozen inverses or low utilized synths being deprecated - ensure that the holders when being purged back to sUSD still have to pay the exchange fee.

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->

Synths that are frozen or deprecated are purged from time to time. The current system does not charge exchange fees in the case of purging from any synth to sUSD, due to a design decision at the time regarding the ease of implementation within the system. This should be updated to charge fees, preventing users from camping out in these synths without paying the fair share of exchange fees.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

This change would do away with the `synthInitiatedExchange()` function in `Sythetix`, and invoke `exchange` instead.

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

By removing excess code in `Elysian`, we reduce the contract size for deployment and slightly improve the gas used during exchanges.

## Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->

TBD

## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).