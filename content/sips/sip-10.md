---
eip: 10
network: Ethereum
title: Upgrade Delegate Powers
author: Nocturnalsheet (@nocturnalsheet)
status: Implemented
created: 2019-07-16T00:00:00.000Z
type: Governance
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->
This EIP proposes to add the ability for Delegates to mint & burn on their owners behalf. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
What are Delegates and what are their current powers? Delegates are trusted wallet addresses that you can set to claim the weekly rewards on your behalf. This function is already live on SNX mainnet however adoption will likely be limited if Delegates are not able to help their owner in penalty to fix their c ratio before claiming the rewards. By upgrading the current powers of Delegates, we will be able to explore the true potential of this feature and hopefully help minters to have an easier life and less #tech-support issues with their ledger wallet. This will also encourage 3rd party integrations such as building an automated delegate to help claim the weekly rewards

## Motivation
<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->
We expect c-ratio and reduction of rewards period to change from time to time based on governance calls so by upgrading the powers of delegates, owners can make use of their delegates to help them react to c-ratio and rewards period changes more easily. Using delegates provides higher security as well because now you can keep your hardware wallet in cold storage without needing to connect it online anymore. Also we expect delegates to help solve a major pain point for ledger wallet owners with their constant browser support issues. More importantly delegates currently can only claim rewards on behalf, however if the owner wallet is in penalty, the delegate will not be able to help fix the penalty and claim for maximum rewards. The upgrade in powers is much needed to complete the potential of what delegates can help their owners to achieve for rewards. 
Delegating synthetix.exchange() is to be able to exchange via a mobile DApp browser and for Triggered Orders. (see https://github.com/elysianDAO/synthetix/issues/195)

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
New call functions expected to be added in which allows owner to approve each function individually or all 3 functions of claim, issue and burn with a single contract call

function issueSynthsOnBehalf
function issueMaxSynthsOnBehalf

function burnSynthsOnBehalf
function burnSynthsToTargetOnBehalf

function approveIssueOnBehalf
function approveBurnOnBehalf

function removeIssueOnBehalf
function removeBurnOnBehalf

function approveAllDelegatePowers (add delegate entries for all of the above including claimFeesOnBehalf)
function removeAllDelegatePowers

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

There should be additional functions to safeguard against potential rogue delegates after approval hence:
1) Delegates will only be able to burn sUSD if the owner is in penalty and only up to the point where the penalty will be removed
2) Delegates will not able to burn any sUSD to unlock the owner SNX tokens 

Technical consultation has been asked from Clinton (hav-noms) & Jackson(jacko125) (SNX core team) and initial feedback is that this is feasible 

Strategic backers for this EIP are SNX Discord Guardians - gmgh & Arthur 

Green light given by Kain to push this EIP forward

Potential uses cases 
1) SNX stored in ledger wallet, delegate to your own hot wallet such as metamask wallet to do claim/burn/mint without worrying about broken ledger support on browser ever again
2) Integration with 3rd party services to automate the weekly rewards claim and ensuring that you can always claim maximum rewards because your delegates can now fix your c ratio if you are in penalty
3) SNX stored in hardware wallet, delegate to your own hot wallet such as metamask/trust wallet so that when you are traveling or away from home you will be still be able to claim for maximum rewards easily
 
## Test Cases
<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->
  https://github.com/elysianDAO/synthetix/blob/v2.21.6/test/contracts/DelegateApprovals.js
  https://github.com/elysianDAO/synthetix/blob/v2.21.6/test/contracts/Issuer.js#L1703
  https://github.com/elysianDAO/synthetix/blob/v2.21.6/test/contracts/Exchanger.js#L1230
  
## Implementation
<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

- Deprecate existing `DelegateApprovals` contract that is attached to FeePool and supports only setting delegation for single action/s.
  
- Doesn't require associatedState to be set to FeePool contract.
 
- User's can set their delegated approvals directly on the new `DelegateApprovals` contract and desired level of actions they want to give each approved delegate address.

- Elysian / Issuer and FeePool will read from the `DelegateApprovals` as a single source of truth for the required delegations.

- Add EternalStorage pattern to new `DelegateApprovals` contract to allow adding new delegation powers but also not lose existing approvals that have been set.  

https://github.com/elysianDAO/synthetix/blob/master/contracts/DelegateApprovals.sol

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).