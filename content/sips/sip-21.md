---
eip: 21
network: Ethereum
title: Double exchange fee rate on swing trades
author: Clinton Ennis (@hav-noms)
status: Implemented
created: 2019-10-17T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->

Double the exchange fee rate on any swing trade. That is any move to or from an `s` Synth to an `i` Synth. e.g. `sTRX` <> `iBTC` or `iETH` <> `sBNB`. The one Synth excluded from this is `sUSD` - moving in or out of `sUSD` will _not_ double the fee.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

Doubling the exchange fee rate would reduce the amount of opportunities for a front runner however in a volatile market would not be effective anymore. The lever is the exchange fee rate which is just a configuration change via a [ECCP](https://eips.elysian.finance/all-eccp).

This has already been discussed in where the bot runners have down voted this issue. Where as the majority of the community voted it up.

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->

There is already a leveraged benefit on the inverse Synths and currently being able to trade short <> long in a volatile market is a continuous advantage to front runners.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

- In `Elysian.exchange()` detect a swing trade, that is any exchange to or from any synth beginning with s or i.
- Double the `ExchangeRates.exchangeFeeRate()`

The normal exchange fee rate is 30 bips. It is currently 50 bips which would make the swing trade 100 bips. When it is restored to 30 bips it would then only be 60 bips on a swing trade.

This is only a temporary stop-gap until either:

- the full implementation of [eip-12](./eip-12.md) is rolled out which should reduce the lag opportunity on price updates
- or the implementation of the chainlink + exchange order queue ([proposed in this issue](https://github.com/elysianDAO/synthetix/issues/298))

Once one of the above is implemented, then I propose to remove this exchange fee doubling mechanism.

## Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->
https://github.com/elysianDAO/synthetix/blob/v2.12.2/test/Elysian.js#L2833

## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
https://github.com/elysianDAO/synthetix/commit/4022200fbe82ff25f6113993dc3bc84c442240c1

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).