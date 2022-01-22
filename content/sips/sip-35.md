---
eip: 35
network: Ethereum
title: Skinny Ether Collateral
status: Implemented
author: 'Kain Warwick (@kaiynne), Clinton Ennis (@hav-noms), Jackson Chan (@jacko125)'
created: 2020-01-13T00:00:00.000Z
type: Governance
---

<!--You can leave these HTML comments in your merged EIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new EIPs. Note that an EIP number will be assigned by an editor. When opening a pull request to submit your EIP, please use an abbreviated title in the filename, `eip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the EIP.-->
The original mechanism for Ether collateral would have allowed stakers to augment an SNX positions with Ether. However, this introduced several issues, including the potential dilution of SNX value capture. This risk was offset by the ability to scale the Synth supply faster and generate more trading volume on sX. So the question was whether the trade off of SNX value dilution in the short term was worth the long term benefits. This EIP proposes a mechanism that avoids this conflict. The key to this solution was combining the proposed Synth lending functionality with the Ether collateral mechanism. The result is a system that augments the Synth supply, enables easier and more efficient access to sX and does not dilute SNX value capture. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
To mint Synths (sUSD) a user locks SNX and is assigned a percentage of the global debt pool, Ether collateral will allow Ether to be locked to mint sETH. This sETH debt will be excluded from the global debt pool, so for an SNX staker the global debt pool will be calculated as Total Issued Synths - Total ETH backed sETH. This means SNX minters take on the risk of debt fluctuations from ETH backed sETH, this risk is offset by the fact that fees are only paid to SNX minters and not to ETH minters. 

There are two fees associated with opening an ETH backed sETH position, a minting fee of 50bps and a interest rate of 5% APR. The interest charged on the loan will be paid to SNX Minters when the loan is repaid. 

The collateral requirement for each position is 150%. There is also a supply cap of 5000 sETH and a fixed three month term after which a more advanced version will be launched with variable interest rates based on utilisation rates. The next version will also incorporate other features as required based on the data gathered in the first three month period.

At the end of the three month period any outstanding loans must be paid back, if after a one week grace period a loan is outstanding anyone will be able to send sETH to close the position claiming the outstanding ETH.

## Motivation
<!--The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.-->
The addition of Ether collateral to the Elysian Protocol will allow ETH holders to easily enter and exit Elysian Exchange. Rather than having to trade Ether for Synths a trader can put up Ether as collateral to borrow Synths and trade on sX, unwinding the loan once they wish to exit the system. This reduces the risk of slippage entering and exiting the Elysian ecosystem and will greatly expand the potential pool of traders. See this GH Issue for more context on the motivation and trade-offs [issue-232](https://github.com/elysianDAO/synthetix/issues/232).

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

### EtherCollateral contract 
 - Requires permision on sETH to mint directly. (upgrade to sETH required)
 - Ownable, Pausable
 - Configuration
   - interestRate: If updated, all outstanding loans will pay this interest rate in  on closure of the loan. Default 5%
   - issueLimit: Maximum amount of sETH that can be issued by the EtherCollateral contract. Default 5000
   - issuanceRatio: Collaterization ratio. Default 150%
   - issueFeeRate: Minting for creating the loan. Default 50 bips. 
   - openLoanClosing: Boolean to allow anyone to close the loans with sETH.
   - minLoanSize: Minimum amount of ETH to create loan preventing griefing and gas consumption. Min 1ETH = 0.6666666667 sETH 

#### Functions
##### `CreateLoan() payable` function
- Require sETH to mint does not exceed cap
- Require openLoanClosing to be false
 - Issue sETH to c-ratio
 - Store Loan: account address, creation timestamp, sETH amount issued
  
###### `CloseLoan()` function
 - Require sETH loan balance in wallet
 - Burn all sETH
 - Calculate and deduct interest(5%) and minting fee(50 bips) in ETH
  - Fee Distribution. Purchase sUSD with ETH from Depot then call `FeePool.donateFees(feeAmount)` to record fees to distribute to SNX holders. 
  - The interest is calculated based on a simple interest over the 3 months period per second. 
  - Using this formula, the ETH interest on 100 sETH loan over a year would be `100 × (5.0% / 31536000) * time in seconds) - 100 = ~0.5 ETH`
 - Send remainder ETH back to loan creator address

### sETH contract 
 - modifier to allow EtherCollateral to issue sETH
 - (Potential) Subclass type for allowing EtherCollateral contracts to mint this synth
 - configuration (or contract resolver) for the EtherCollateral address
 
### Elysian contract 
  - [eip-33](https://eips.elysian.finance/eips/eip-33) Deprecate XDR synth from Elysian 
  - debtBalanceOf calculation `totalIssuedSynths() - EtherCollateral.totalIssuedSynths()`

### FeePool contract 
  - `FeePool.recordFeePaid(amount)` external function to record fees to distribute for the open fee period.
  - Synths to notify amount of fees in sUSD transferred into the FEE_ADDRESS (`0xfeEFEEfeefEeFeefEEFEEfEeFeefEEFeeFEEFEeF`) 

### Synth contract
 - `Synths.transfer(to, value)` allows EtherCollateral contract to transfer synths directly to the `FEE_ADDRESS` and convert the amount into sUSD and which is stored in feePool as fees to distribute to SNX stakers.    

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
There are several assumptions to the Ether Collateral proposal that require empirical observations of actual market participant behaviour in order to validate. The most important of these is the sensitivity to interest rates of borrowers, additionally demand for ETH denominated loans is somewhat untested. In order to gather data about these assumptions we propose a simple model with a fixed interest rate and supply cap. Both the interest rate and supply cap will be configurable and can be modified by an ECCP. If demand significantly exceeds expectations then the cap or interest rate or both can be modified. If demand is lower than anticipated interest rates can be lowered to ascertain actual market demand. If demand is low even at low/zero interest rates it may be that a modification to the loan denomination is required. 

## Test Cases
<!--Test cases for an implementation are mandatory for EIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for EIPs but can be included with the implementation.

## Implementation
<!--The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
The implementations must be completed before any EIP is given status "Implemented", but it need not be completed before the EIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Configurable
<!--Add variables that are configurable via ECCP-->
1. Supply cap - 1500 ETH
2. Interest rate - 5%
3. Minting fee - 30bps
4. Max loan limit - 50 per wallet
5. Min loan size - 1 ETH

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).