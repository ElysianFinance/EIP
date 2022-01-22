---
eip: 17
network: Ethereum
title: Bytes4 to Bytes32 currencyKeys
status: Implemented
author: 'Jackson Chan (@jacko125), Clinton Ennis (@hav-noms)'
created: 2019-08-29T00:00:00.000Z
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->
Upgrade type of currencyKeys from Bytes4 to Bytes32. The following Elysian contracts will be upgraded to reflect bytes32 for currencyKeys and synth.currencyKey values.  

- ExchangeRates.sol
- FeePool.sol
- PurgeableSynth.sol
- Synth.sol
- Elysian.sol

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->
Elysian wants to create new synths with symbols longer than 4 chars. i.e sATOM, sDEFI This is currently not possible
with currencyKeys type defined as Bytes4.

## Motivation

<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->
The system was originally built with currencyKeys as Bytes4 to save storage space. However the system requirements have changed to require Symbols longer than 4 charactors for Synths like the DeFI index token sDEFI.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->
Change all instances of Bytes4 to Bytes32 in Synth.sol, Elysian.sol, ExchangeRates.sol and FeePool.sol.

- Upgrade all synth's proxy to ProxyERC20 contract.
- ElysianState.sol cannot be upgraded so the preferredCurrency and setPreferredCurrency function will remain as bytes4, but the use of preferredCurrency is deprecated in other contracts.

```    // Users can specify their preferred currency, in which case all synths they receive
    // will automatically exchange to that preferred currency upon receipt in their wallet
    mapping(address => bytes4) public preferredCurrency;
````

```    /**
     * @notice Set preferred currency for a user
     * @dev Only the associated contract may call this.
     * @param account The account to set the preferred currency for
     * @param currencyKey The new preferred currency
     */
    function setPreferredCurrency(address account, bytes4 currencyKey)
        external
        onlyAssociatedContract
    {
        preferredCurrency[account] = currencyKey;
    }
```

## Test Cases

<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->
https://github.com/elysianDAO/synthetix/commit/908028f492187bb85dd519db4435d9c1964f8b4c

## Implementation

<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
https://github.com/elysianDAO/synthetix/commit/908028f492187bb85dd519db4435d9c1964f8b4c


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).