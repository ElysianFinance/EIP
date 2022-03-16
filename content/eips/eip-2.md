---
eip: 2
network: Ethereum
title: Trustless bug bounty
status: Draft
author: King Luxor
created: 'March 11, 2022'
type: Governance
---

## Simple Summary
To establish a mechanism to reward users for bug reports and micro audits of our smart contract and front-end code.

## Abstract
The Elysian council proposes the establishment of security bounty grant and a set of criteria to disburse rewards to users. The fund should be implemented as a trust-less smart contract governed by our upcoming DAO. Bug reports and submissions should be subject to core contributors and community scrutiny before any monetary compensation is assigned and settled. 

## Motivation
Agile development requires continuous code updates and increases the risk of potential security issues. Code revisions are necessary and must be consistent and frequent. Audit companies tend to have high prices and long delivery time, therefore a more streamlined alternative is required. 

## Specification
### Overview
We propose a smart contract to handle bug report/code audit proposals and fund disbursement in a trust-less fashion. Proposals and reward eligibility will be voted on by a specially elected technical council based on a pre-established criteria. Formulation of such criteria is among the objectives of this document.

## Bug classification
A bug or security issues can be classified as either low, medium, or high risk. Rewards are assigned as follows:

- Low:             100   pLYS
- Medium:          500   pLYS
- High:           1500   pLYS

## Technical council
The technical council will be composed initially by founders and core contributors to the project. The criteria to become a core contributor will be formalized in a future EIP. Currently, the best way to start is to contribute to this document. 

## Workflow
1. Bounty hunters write a bug report following a classic Github issue format, including steps to reproduce the problem and behavior shown vs expected. The document is uploaded on IPFS.
2. The IPFS hash of the document is used as a parameter for the submitReport function, along with the public key of the submitter. The report is created and marked as "unassigned".
3. An Elysian technical council member examines the report and assigns it a severity, either low, medium or high by invoking the flagReport function. 
4. If the bug classification is not disputed by another council member within 3 days, the submitter (or anyone else) can call the settleReport function which will disburse the reward.

## Implementation
A preliminary implementation is available at https://github.com/ElysianFinance/launch-contracts/blob/master/contracts/bounty/
