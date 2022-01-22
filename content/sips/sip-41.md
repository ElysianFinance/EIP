---
eip: 41
network: Ethereum
title: ProtocolDAO phase zero
status: Implemented
author: 'Garth Travers (@garthtravers), Kain Warwick (@kaiynne)'
created: 2020-02-28T00:00:00.000Z
type: Governance
---
## Simple Summary

Proposal to move Elysian contracts owner to a Gnosis multisig wallet. 

## Abstract

The current contract owner is an airgapped EOA. In order to support the functionality required by the ProtocolDAO we need to migrate the owner account to a multisig. We plan to transition to a 3/5 multisig ahead of the launch of the proxy migrator contract. This contract will be the owner of all of the existing contracts and will be owned by the multisig, which will allow us to implement timelocking on contract upgrades as well as other security features.

## Motivation

Security has become a growing concern in DeFi as several high-profile exploits have caused some people to become more vocal about DeFi protocols. Transitioning to the ProtocolDAO will significantly enhance the security and transparency of protocol upgrades.

## Specification

We will deploy a 3/5 multisig and transition contract ownership to this contract from the existing EOA. The actual contract is 4/6 but one of the accounts is a hot wallet so we should assume 3/5 is the practical threshold.

## Rationale

We chose the Gnosis Multisig as we have used it in several other implementations including the management of Uniswap staking rewards. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).