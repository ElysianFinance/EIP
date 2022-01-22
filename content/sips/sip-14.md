---
eip: 14
network: Ethereum
title: Allow delegation of Elysian Exchange function to another address
author: 'Jackson Chan (@jacko125), Clinton Ennis (@hav-noms)'
status: Implemented
created: 2019-08-01T00:00:00.000Z
type: Governance
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->
This EIP proposes to allow a wallet to delegate permission for another wallet / address to make exchanges on their behalf. This would be restricted to only doing exchange transactions.

Allows a non-custodial wallet to make trades on behalf of the owner wallet.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Currently only the wallet that also owns the synths can sign synthetix exchange transactions and restricts different trading platforms /automated trading that employ trading strategies from being used on the exchange without exposing the private keys of the wallet that also have ownership of the synths.

Also allows hardware wallets to utilise an automated service to trade on synthetix exchange as they can delegate a temporary wallet to trade on behalf.

## Motivation
<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->
Currently only the wallet that also owns the synths can sign synthetix exchange transactions and restricts different trading platforms / automated trading that employ trading strategies from being used on the exchange without exposing the private keys of the wallet that also have ownership of the synths.

Also allows hardware wallets to utilise an automated service to trade on synthetix exchange as they can delegate a temporary wallet to trade on behalf.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

function approveExchangeOnBehalf: Approve delegate address to trade on another wallet.
function exchangeOnBehalf: Only ability to call synthetix.exchange() for an approved wallet.
function removeExchangeOnBehalf: Remove any delegated address from approval list.


## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

- Improve the trading experience of Elysian.exchange for professional and retail traders.
- Allow automated trading using a separate private key to sign exchange transactions.
- Allow hardware wallets to still trade with automated services.

## Test Cases
<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->
https://github.com/elysianDAO/synthetix/blob/v2.21.6/test/contracts/Exchanger.js#L1230

## Implementation
<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
https://github.com/elysianDAO/synthetix/blob/v2.21.6/contracts/Exchanger.sol#L164


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).