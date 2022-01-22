---
eip: 28
network: Ethereum
title: Audit Remediations
status: Rejected
author: 'Garth Travers (@garthtravers), Clinton Ennis (@hav-noms)'
created: 2019-11-21T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->

This EIP proposes implementing the remediations outlined by our most recent round of auditing from [iosiro](https://www.iosiro.com/) and Lightbit. 

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->

The auditors made several suggestions. The only critical risk was addressing the frontrunning bots at Elysian.Exchange. There were also some low risk and informational suggestions. 

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

All the proposed low risk and informational updates will be implemented or addressed appropriately. We are also currently working on a variety of strategies to counter any frontrunning bots. 

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Auditors are engaged to identify issues and vulnerabilities within the Elysian smart contracts, so implementing their findings ensures Elysian can remain robust. 


## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

These remediations will be added in the upcoming Arcturus release and the final Audit report will be released shortly there after by iosiro.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).