---
eip: 53
network: Ethereum
title: Binary Options
status: Implemented
author: Anton Jurisevic (@zyzek)
created: 2020-04-23T00:00:00.000Z
type: Governance
---

## Simple Summary

This EIP proposes to allow the creation of new markets for trading binary options.

## Abstract

A binary option is a type of option contract which provides a fixed return based on a binary outcome in the future.
These options pay out on a certain date if the price of a chosen asset is above (or below) a level specified at the
creation of the option. This allows users to take a position on the price of any asset known to the Elysian system.
The proposed implementation uses a parimutuel-style initial bidding period to set the price per option, with one side of
the market paying out the other side at maturity. This structure removes the necessity of matching counterparties.

---

## Table of Contents

- [Motivation](#motivation)
  - [Summary](#summary)
  - [Smart Contracts](#smart-contracts)
  - [Basic Dynamics](#basic-dynamics)
    - [Market Resolution](#market-resolution)
    - [Fees](#fees)
    - [Option Supply and Prices](#option-supply-and-prices)
    - [Market Equilibria](#market-equilibria)
  - [Market Creation](#market-creation)
    - [Initial Capital](#initial-capital)
    - [Oracles](#oracles)
    - [Further Incentives](#further-incentives)
  - [Bidding](#bidding)
    - [Bids](#bids)
    - [Refunds](#refunds)
  - [Trading](#trading)
  - [Maturity](#maturity)
    - [Oracle Snapshot](#oracle-snapshot)
    - [Exercising Options](#exercising-options)
  - [Expiry](#expiry)
  - [Future Extensions](#future-extensions)
    - [Arbitrary Maturity Predicates](#arbitrary-maturity-predicates)
    - [Multimodal Options Markets](#multimodal-options-markets)
    - [Limit Bids](#limit-bids)
  - [Summary of Definitions](#summary-of-definitions)
- [Rationale](#rationale)
- [Test Cases](#test-cases)
- [Implementation](#implementation)
- [Discussion Questions](#discussion-questions)
- [Configurable Values](#configurable-values-via-eccp)

---

## Motivation

Elysian enhances whatever markets are implemented on top of it, as users can frictionlessly enter and exit in any
currency they wish. This effectively allows any instruments to be denominated in any currency – but it requires
integration with the Elysian platform.

When it comes to actually setting up a market, stakers take on some of the risk of capitalising these markets, and in
providing the infrastructure to allow them to operate: these responsibilities and the labour required to generate binary
options markets should be compensated. This requires fees to be remitted to the pool, and hence integration with the
protocol itself. These fees are effectively the price of accessing the network effect that Elysian provides by listing
the market.

Additionally, the maturity condition of a binary option requires integration with trustworthy price oracles, which
Elysian already provides.

---

## Specification

### Summary

Binary option markets are created by a manager contract, which keeps track of all markets over their lifetime.

At the time of creation, several market parameters are set by the creator, in particular the strike price,
underlying asset, and maturity date. The resulting market has two sides, corresponding to the events that the price of
the underlying asset is either higher or lower than the specified strike price at the maturity date.
Ownership and transfer of options on either side of the market is managed by a pair of dedicated ERC20 token contracts.

Note that in this document, all prices, bids, payoffs, and so on will be denominated in sUSD, but there is no reason
future markets couldn't be denominated in other Synths.

Over its life cycle, a binary options market transitions through the following states in order:

#### 1. Bidding

In the bidding period, the initial price and supply of options on each side of the market are determined.
No options exist at this point, as their price is indeterminate.

In order to fix the option prices, users bid to receive options on one or the other side of the market.
Bids cannot be transferred between wallets, but they can be refunded for a fee.
At the termination of bidding the basic price of each option is fixed, according to the relative demand on each
and no more bids or refunds are accepted.

#### 2. Trading

From the start of the trading period users can claim the options they are owed based on
the size of their bid and the final option prices.
Once claimed, the options are free to be traded between wallets, for example on secondary markets.
In this way the market price of each option can still float freely before the maturity date.

#### 3. Maturity

After the maturity date is reached, the price of the underlying asset is recorded, and the market
resolves either long (the underlying asset's price is higher than or equal to the strike price),
or short (the underlying asset's price is lower than the strike price). At this time, any collected
fees are sent to the market creator and the Elysian fee pool.

Subsequently, users may exercise the options they hold, which will destroy them.
If the market resolved long, each long option pays out 1 sUSD, and each short option pays out nothing.
If the market resolved short, each long option pays out nothing, and each short option pays out 1 sUSD.

These returns are paid from the total bids made on both sides during the bidding period.

#### 4. Expiry

After a time period allowing users to exercise their options,
those markets expire, and the market can destroyed.

Any fees collected are sent to the market creator
and the Elysian fee pool, and the market is removed from its parent manager's
list of active markets.

---

### Smart Contracts

![Architecture](assets/eip-53/smart-contract-architecture.svg)

- `Manager`: Responsible for generating new markets, and maintaining a list of active markets.
- `Market`: Each `Market` instance provides options for a particular asset to be at a certain price on a given date. Many of these could exist simultaneously for different assets, with different strike prices, maturity dates, and so on. All bid funds are held in this contract.
- `Option`: This is an ERC20 token contract which tracks each user's bids and option balances. Two option tokens exist per market, one long and one short.

---

### Basic Dynamics

#### Market Resolution

If the price of an underlying asset \\(U\\) is queried from an oracle at the maturity date,
its price at maturity \\(P_U\\) is either above or below the strike price \\(P_U^{\*}\\).
Users bid on each outcome to receive options that pay out in case that event occurs,
exchanging sUSD with the `Market` contract.

At the maturity date the market resolves into exactly one of these events, which will be denoted \\(L\\) and \\(S\\):

- \\(L\\): The event that \\(P_U \geq P_U^{\*}\\), when long options pay out 1 sUSD each.
- \\(S\\): The event that \\(P_U < P_U^{\*}\\), when short options pay out 1 sUSD each.

And further define the quantities of sUSD bid on each side:

- \\(Q_L\\): The value of sUSD bid on the long side of the market.
- \\(Q_S\\): The value of sUSD bid on the short side of the market.

#### Fees

During the bidding phase, bids and refunds are made, and fees are charged on these transactions.

There are two basic fee rates:

- \\(\phi\\): The fee charged on bids, to be paid to the market creator and fee pool.
- \\(\phi\_{R}\\): The fee rate charged on refunds, which stays in the market, compensating the remaining bidders.

The market collects fees as bids are refunded, hence:

- \\(Q_R\\): The total value of sUSD accrued as refund fees.

After the bidding period has concluded, the total funds held in the contract is the sum of bids on both sides,
plus any accrued refund fees; a value of (\\(Q_L + Q_S + Q_R\\)) sUSD.
At maturity, the bidding fee is charged on the total deposits, and these fees are remitted to the market creator and
fee pool. The remaining funds are paid out to winning option-holders.

The specific quantities sent to the market creator vs the fee pool are determined by distinct fee rates for the fee pool
(\\(\phi*{pool}\\)) and for the market creator (\\(\phi*{creator}\\)), and the overall fee rate is their sum:

\\[
\phi := \phi_{pool} + \phi_{creator}
\\]

These fees are transferred to the pool and the creator at the resolution of the market.

The refund fee is intended to dampen price volatility caused by users exiting their positions too readily, and also to
disincentivise malicious players from sending toxic price signals to the market, taking a position to affect the price
intending only to exit part of the position before the close of bidding. It also compensates the remaining market
participants in case any of these things occurs.

#### Option Supply and Prices

At the maturity date, a quantity \\((Q_L + Q_S + Q_R\\)) sUSD is deposited in the market, of which
\\(\phi (Q_L + Q_S + Q_R)\\) sUSD is deducted as fees. The remaining quantity \\(Q\\) is paid to option holders on the
winning side of the market, with:

\\[
Q := (1 - \phi) (Q_L + Q_S + Q_R)
\\]

Since each option pays 1 sUSD, and L and S are mutually exclusive events, each side of the market
must also be awarded \\(Q\\) options. So the total quantity of options minted is \\(2Q\\),
but only \\(Q\\) mature in the money.

The market spent quantities \\(Q_L\\) and \\(Q_S\\) of sUSD to exchange into \\(Q\\) options per side, so the
final option prices are easily computed:

\\[
P_L := \frac{Q_L}{Q} \approx \frac{Q_L}{Q_L + Q_S}
\\]

\\[
P_S := \frac{Q_S}{Q} \approx \frac{Q_S}{Q_L + Q_S}
\\]

Where the rightmost formulae are approximations obtained by neglecting fees, assuming \\(\phi\\) and \\(Q_R\\) are
close to zero.

For example, if \\(Q_L = Q_S = 100\\) sUSD, then \\(P_L = P_S \approx 0.5\\) sUSD per option.
But if an additional \\(50\\) sUSD is bid on \\(L\\), then \\(P_L \approx 0.6\\), while \\(P_S \approx 0.4\\). Thus
increased demand for options on one side of the market increases the price on that side and reduces it on the other.
Larger bids will shift the prices to a correspondingly greater degree.

It is only at the end of the bidding period that the price is finalised, and users can claim their bids.
The prices are designed such that each bidder will receive a pro-rated quantity of options according to the size of
their bid. If a user had bid \\(b\\) sUSD on \\(L\\), they would receive \\(\frac{b}{P_L}\\) long options.
If they had bid instead on \\(S\\), they would receive \\(\frac{b}{P_S}\\) short options.

#### Market Equilibria

If the true probability of \\(L\\) occurring is \\(p\\), then long options yield an expected profit of
\\(p - P_L\\) each, which is positive whenever the price is lower than the probability that L occurs.
So, as bidding on an option drives its price up, its price should approach what the market believes
the probability of its corresponding event is, although a player with an edge may not wish to
bid the price all the way up to the true probability so as not to communicate their belief to the market.

Since the option prices are effectively estimated probabilities, it should feel natural that
\\(P_L + P_S \approx 1\\) sUSD per option, as this reflects the fact that \\(L\\) and \\(S\\) are complementary events.
As \\(S\\) occurs whenever \\(L\\) does not, its probability is \\(1 - p\\), so the expected short profit is
\\((1 - p) - P_S \approx (1 - p) - (1 - P_L) = P_L - p\\), which is the negative of the long profit. That is, a binary
option market is a zero-sum game, and the incentive exists to refund a position whose price is too high as much as one
exists to bid on an option whose price is too low.

So, modulo fees, each option price can be read off directly as the approximately odds of its event occurring.

##### The Effect of Fees

The presence of fees has a small impact on prices, and thus the odds that the market predicts.

Let us assume that the sum of all refunds is currently proportional with the size of the market by some volatility
constant \\(v\\), then we can describe the accrued refund fees as follows:

\\[
Q_R = v \cdot \phi_{R} \cdot (Q_L + Q_S)
\\]

Then we have:

\\[
P_L + P_S = \frac{1}{(1 + v \cdot \phi_{R})(1 - \phi)}
\\]

So as the bidding fee increases, prices increase. Assuming no refunds have been made, then the sum of prices
is greater than 1; it will only be rational for market participants to purchase options if they believe the
options are mispriced by a margin larger than the bidding fee rate. Given that the fee rates are close to zero, however,
and there is high uncertainty before the maturity date, most of the time this will not be a major influence.

On the other hand, if refunds are made, the volatility term increases, and prices decrease.
Assuming \\(\phi = 0\\), the sum of prices is less than 1; both sides have been discounted, and there should be extra
demand attracted, decreasing the volatility term enough to bring the sum of prices back down close to 1.

---

### Market Creation

A new options market is generated by the `Manager` contract; the contract creator must choose fixed values for:

- \\(O\\): The price oracle for the underlying asset \\(U\\), which implicitly sets \\(U\\) as well;
- \\(t_b\\): The end of the bidding period;
- \\(t_m\\): The maturity date;
- \\(P_U^{\*}\\): the strike price of \\(U\\);
- \\(Q_L\\) / \\(Q_S\\): the initial bid on each side of the market;

A new `Market` contract is instantiated with the specified parameters, and two child `Option` instances.

For discoverability purposes, the address of each new `Market` instance will be tracked in a
list on the `Manager` contract until that market is destroyed at the end of its life. In addition, the total
value deposited across all markets is tracked in the `Manager`.

#### Initial Capital

The market creation functionality of the `Manager` contract will be public; anyone at all will be able to create a
market, provided they can meet the capital requirement \\(C\\). The capital requirement dissuades users from creating
low-liquidity markets flippantly.

The capital requirement also ensures that the market has initial prices: without positive values for \\(Q_L\\) and
\\(Q_S\\), \\(P_L\\) and \\(P_S\\) are undefined. No constraints are placed upon the initial division of funds between
\\(Q_L\\) and \\(Q_S\\), except that they must both be positive, and the sum \\(Q_L + Q_S\\) must be worth more than
\\(C\\).

The particular division of funds between long and short sides of the market determines the initial prices, and reflects
the market creator's initial belief about the odds. Just like any other bidder, the market creator will be awarded
options in return for this initial capital.

A third reason it is necessary to provide this initial liquidity is to ensure that when bids come into a new market,
the market is liquid enough that the prices don't swing too aggressively.
In a very thin market, small bids can cause drastic and undesirable shifts in price, and the market's size needs to be
step-laddered up to achieve a reasonable size.

The market creator may refund part of their initial capital if they provided more than the capital requirement,
but until the end of bidding, their total bids in the market must be greater than \\(C\\). After the bidding phase,
the creator may trade or exercise their options, or simply reclaim the capital at market destruction.
Thus it is important for the author of a given market to carefully select its initial parameters.
By selecting a combination of asset, timing, and strike price that attracts demand, and by choosing initial prices that
are reasonably fair, the market creator minimises their own risk by maximising the market's health.

#### Oracles

The price oracle must be selected from the approved set of data sources available on the
Elysian [`ExchangeRates`](https://docs.elysian.finance/contracts/exchangerates/) contract, which includes a number of
[Chainlink Aggregators](https://github.com/smartcontractkit/chainlink/blob/5ab3cd2777590701007cc02941cb94179e79f3ba/evm/contracts/Aggregator.sol).

Oracles are initially constrained to a trusted set, otherwise there is the strong potential for malicious actors to
supply manipulated data feeds, but this could be democratised in the future.

#### Further Incentives

Without a profit motive there is no reason to expect anyone to risk funds in the creation of these markets,
and therefore a portion of the overall payout (\\(\phi\_{creator}\\)) will go to the market creator at the maturity date.
In the initial stages it may be necessary to subsidise the creation of these markets by means of inflationary rewards or
other bounties. The implementation of such subsidies is an open question for the community to answer.

---

### Bidding

The bidding period commences immediately after the contract is created, terminating at time \\(t_b\\), when the trading
period begins. During the bidding period, users may add or remove funds on either side of the market, allowing it to
equilibrate, ultimately fixing the option prices from time \\(t_b\\) onward.

The following addresses the long side \\(L\\); the short \\(S\\) case is symmetric.

#### Bids

Users may bid to receive options that will pay out if outcome \\(L\\) occurs.
In order to do this, wallet \\(w\\) deposits \\(b\\) sUSD with the `Market` contract. \\(Q_L\\) and the associated
long `Option` contract's balance for wallet \\(w\\) are both incremented by \\(b\\).

#### Refunds

If a user has already taken a position, they may refund it. A fee is charged for this to counteract toxic order flow
and other manipulations available to actors with private information.

If the user with wallet \\(w\\) has already bid \\(b\\) sUSD long, then they may refund any quantity \\(q \leq b\\),
and will receive \\(q (1 - \phi*{R})\\) sUSD. \\(Q_L\\) and the associated long `Option` contract's balance
for wallet \\(w\\) are decremented by \\(b\\). The remaining \\(q \cdot \phi*{R}\\) sUSD remains in the common pot,
but not allocated to the total bids on either side, and so discounts the prices for both sides, incentivising further
demand to make up for that which was withdrawn by the refund.

A bidder may wish to refund their position because they have gained new information,
or the underlying market conditions have changed. However, recall that placing a bid shifts prices for all existing
bidders, so they may also wish to refund their position because the option price has shifted too much or they
believe the options are now mispriced.

When a bidder exits the market, the part of their bid that they leave behind compensates the market for the incorrect
signal they previously transmitted, increasing the payoff for other users who stuck with their position.
Be aware, however, that although this fee disincentivises churn and market toxicity, it also slightly distorts the
market, creating a friction that stands in the way of the most rapid possible price discovery.

---

### Trading

At the commencement of the trading period, bidding is disabled and ERC20 token transfer is enabled. As the individual
token prices have stabilised, the quantity of options each wallet is owed can be computed, so it is at this point that
users can claim the options they are owed.

An account that bid \\(b\\) sUSD on each of the long and short sides will be able to claim option balances of
\\(\frac{b}{P_L}\\) and \\(\frac{b}{P_S}\\) options, respectively.

The same computation produces the total supply of options, which at all times will evaluate to
\\(\frac{Q_L}{P_L} + \frac{Q_S}{P_S} = 2Q\\).

During the trading period, each `Option` contract offers full ERC20 functionality, including `transfer`, `approve`, and
`transferFrom`, supporting trading options on secondary markets.

---

### Maturity

Once the maturity date is reached, the oracle must be consulted and the outstanding options resolved to pay out 1 sUSD
each, or nothing. At their discretion, any user with a positive balance of options can then exercise them to
obtain whatever payout they are owed. At the maturity date, any collected fees are paid out to the fee pool and the
market creator.

#### Oracle Snapshot

After the maturity date passes, any user can instruct the options market contract to query the oracle for the
latest price of the underlying asset. Taking this snapshot will resolve the market.
The price snapshot should generally occur in a timely fashion as whichever side is in the money at maturity has a
strong incentive to resolve the market as rapidly as possible. The options market, having been resolved, will remember
the result, allowing users to exercise their options in the future, even if the price has changed.

The price queried from the oracle can have been last updated before the maturity date, to prevent users from having
to wait before resolving the market, but the price must not be too old. The maximum oracle price age will be
configurable by ECCP.

#### Exercising Options

At maturity, users may exercise the options they hold. The required funds will then be transferred from the
`Market` contract to the user, and their balances in the underlying `Option` token contracts set to zero,
destroying those options so that they cannot be exercised again.
If a user has unclaimed options at the time they call the exercise function, the options they are owed will be
automatically claimed and exercised.

### Expiry

In order to combat the proliferation of defunct options contracts, `Market` instances implement a
self-destruct function which can be invoked a period of time after the maturity date. Once this function is
invoked, the contract and its two subsidiary `Option` instances will self destruct, and the corresponding entry deleted
from the list of active markets on the `Manager` contract.
Upon destruction, any the value of any unexercised options is remitted to the account invoking the expiry function.

---

### Future Extensions

#### Arbitrary Maturity Predicates

At present these options are defined on a particular maturity condition, but the system could readily be augmented with
a range of richer conditions.

If the inputs are restricted to only to a single price, there are many useful predicates that can be defined on
that price beyond the over-under condition proposed in this document. For example, the options could pay out depending
on whether the underlying price at maturity is within a percentage of its initial value.
If inputs are not restricted to a single price, comparisons can be made between several different oracle outputs.
For example, options could pay out based on whether the Nikkei 225 grew by more than the FTSE 100.

In fact any predicate accepting inputs from Elysian oracles could be used as a maturity condition for options.

#### Multimodal Options Markets

Although this structure has been defined for a binary outcome, it extends easily to any number of outcomes.
In particular, if there are \\(n\\) possible outcomes, then \\(n\\) `Option` token contract instances are instantiated,
one for each outcome.

If \\(\Omega\\) is an exhaustive set of mutually exclusive outcomes,
and \\(Q*o\\) is the quantity bid towards outcome \\(o \in \Omega\\),
then \\(Q := (1 - \phi) \sum*{o \in \Omega}{Q_o}\\) is the number of options awarded to each outcome; \\(n \cdot Q\\)
options are issued altogether, of which \\(Q\\) will pay out. Then the price for outcome
\\(o\\) is \\(P_o := \frac{Q_o}{Q}\\).

The binary version is just a special case of this more general structure; notice for example that it possesses the same
property that, neglecting fees, the sum of all prices is 1. Further, it still holds that it is expected to be profitable
to buy a particular option whenever its price is less than the probability of its associated event occurring.
As a result the prices can still be interpreted as the market's estimate of the event odds.

These events could be any discrete set of outcomes, such as the results of political elections.
Thus the multimodal parimutuel structure can function as a general prediction market, provided that good oracle sources
for events of interest can be obtained.

With multimodal markets understood, continuous quantities are also handled by discretising their ranges into buckets.
For example, it would be possible for users to participate in a market focusing on the Ethereum price,
where the possible outcomes were \\($140\\) or less, \\($140 - $150\\), and \\($150\\) or more. In principle any degree
of granularity for these buckets is possible.

#### Limit Bids

A slight issue with the system described is that it assumes an elasticity curve which may not reflect the true
underlying demand on one or both sides of the market. The liquidity at any given price point is infinitesimal,
so participants need to wait for the size of the market to step-ladder up to a desired level.

In order to serve demand at given prices without this step ladder effect, one could allow users to place limit orders on
either side of the market. Then bids on the long and short sides of the market can be 'matched', i.e. they could both be
filled so that the demand is satisfied only under the conditions that there is sufficient depth to allow the price not
to shift too much.
On the other hand, participants may also want to take stop loss positions which would refund their bid if the market
shifts too far underneath them for their preference.

In combination these mechanisms would provide users with the confidence to participate freely in these markets,
enhancing the depth and liquidity of the binary options markets.

These systems could be implemented as a smart contract or as a front-end overlay on synthetix.exchange.
A related proposal for triggered order contracts is discussed in [EIP 54](https://eips.elysian.finance/eips/eip-54) and
[here](https://github.com/elysianDAO/synthetix/issues/195).

---

### Summary of Definitions

| Symbol                                  | Description                                                                                                                                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \\(U\\)                                 | The underlying asset of this market. It is assumed we have a reliable oracle \\(O\\) supplying its instantaneous price.                                                                                                           |
| \\(t_b\\), \\(t_m\\)                    | The timestamps for the end of bidding and maturity, respectively, of a given contract. \\(t_b\\) must be later than the contract creation time, and \\(t_m\\) must be later than \\(t_b\\).                                       |
| \\(P_U\\), \\(P_U^{\*}\\)               | \\(P_U\\) is the price of \\(U\\) queried from the oracle \\(O\\) at the maturity date \\(t_m\\). \\(P_U^{\*}\\) is the strike price of \\(U\\), against which \\(P_U\\) is compared at maturity to resolve the market.           |
| \\(\phi*{pool}\\), \\(\phi*{creator}\\) | The platform fee rate paid to the fee pool and to the market creator respectively. These fees are paid at the market destruction.                                                                                                 |
| \\(\phi\\)                              | The overall market fee, which is equal to \\(\phi*{pool} + \phi*{creator}\\). \\(\phi\\) must in the range \\([0, 1]\\).                                                                                                          |
| \\(\phi\_{R}\\)                         | The fee rate to refund a bid. Its value must be in the range \\([0, 1]\\).                                                                                                                                                        |
| \\(Q_R\\)                               | The accrued refund fees in a market.                                                                                                                                                                                              |
| \\(L\\), \\(S\\)                        | The possible outcomes at maturity. \\(L\\) is the event that \\(P_U \geq P_U^{\*} \\); when the "long" side of the market pays out. \\(S\\) is the event that \\(P_U < P_U^{\*}\\); when the "short" side of the market pays out. |
| \\(Q_L\\), \\(Q_S\\)                    | The total funds on the long and short sides of the market respectively.                                                                                                                                                           |
| \\(Q\\)                                 | The quantity of options awarded to each side of the market; this is equal to \\((1 - \phi) (Q_L + Q_S + Q_R)\\).                                                                                                                  |
| \\(P_L\\), \\(P_S\\)                    | The price of long and short options respectively. Defined as \\(P_L := \frac{Q_L}{Q}\\) and \\(P_S := \frac{Q_S}{Q}\\).                                                                                                           |
| \\(C\\)                                 | The minimum initial capitalisation of a new market.                                                                                                                                                                               |

---

## Rationale

Binary options themselves represent an unsatisfied latent demand in the crypto/DeFi space; but their necessity
ultimately can only be proven by success or failure of an actual implementation. Successfully implemented, however, a
fully-integrated binary options market ecosystem would increase the demand for Synths and increase the diversity of
instruments available to the market for hedging and other purposes.

The parimutuel structure in particular was selected for its simplicity, efficiency, and desirable risk characteristics.
As the aggregated participants in one side of the market pay out the aggregated participants on the other side, this
structure is relatively computationally efficient.
In particular, there is no need for the complexity associated with traditional binary options, which require
counterparties to be matched.

Since all parties only interact with a central pool of funds residing in a smart contract, and the prices behave in
a simple and rational way, the mechanism is completely transparent and trustworthy to all.
There is no questionable mathematical apparatus which implicitly attempts to predict actual supply and demand.
From the perspective of the staking pool, the risk incurred in creating these markets is minimised, since the actual
market position the pool has to take is zero, outside of initial capitalisation. Yet these markets could represent a
real driver of demand and fee generation, which will contribute to the overall health of the Elysian ecosystem.

The design proposed also leverages the existing structures Elysian has built, as it can use as its inputs any
price feed already available, while being enhanced for free whenever new prices are introduced. Similarly, the mechanism
itself can be extended to a much broader catalogue of financial instruments, prediction markets, and so on.

---

## Test Cases

Test cases are included with [the implementation](#implementation).

---

## Implementation

A full implementation of the above specification is provided by the following smart contracts:

- [`BinaryOptionMarketManager`](https://github.com/elysianDAO/synthetix/blob/0e78911f20bf24b9ed37e79f94a7cd3ebe7a51f9/contracts/BinaryOptionMarketManager.sol).
- [`BinaryOptionMarketFactory`](https://github.com/elysianDAO/synthetix/blob/0e78911f20bf24b9ed37e79f94a7cd3ebe7a51f9/contracts/BinaryOptionMarketFactory.sol).
- [`BinaryOptionMarket`](https://github.com/elysianDAO/synthetix/blob/0e78911f20bf24b9ed37e79f94a7cd3ebe7a51f9/contracts/BinaryOptionMarket.sol).
- [`BinaryOption`](https://github.com/elysianDAO/synthetix/blob/0e78911f20bf24b9ed37e79f94a7cd3ebe7a51f9/contracts/BinaryOption.sol).

There is also an [accompanying pull request](https://github.com/elysianDAO/synthetix-docs/pull/16) for documentation.

---

## Discussion Questions

There are a number of details which the community will need to decide on for the proposed markets to flourish.
For example:

### Alternative Price Discovery Mechanism

There exist a number of potential alternative models for finding the price of each option.
One such alternative would remove the bidding period. In this design, options would be generated by a simple exchange of
a $1 for a pair of options. Any binary option market would generate one long option and one short option in exchange for
$1 plus a fee. This works because although the specific prices of each option are not known, it is known that
together they will pay out a single token. Refunds would proceed similarly: a user would have to purchase one of each
option to exchange back to other Synths.

Then price discovery would proceed by the user who just exchanged into an option pair selling the undesired
option on market.

Under this proposal, exchange and transfer functionality could happen at all times, and there would also be no
constraint on the growth of the market, right up to the maturity date.

### Which Markets to Create

The community will drive which markets should actually be opened.
Some experimentation will be needed to settle questions such as which assets to focus on,
the appropriate relative lengths of bidding and trading periods, the overall time to maturity, initial odds and
strike prices.

### Market Lifecycle

It is not clear a priori what level of incentivisation is appropriate for the opening and cleanup of markets.
Determining these levels, and what form the incentives take is particularly relevant if inflationary SNX rewards are to
be used to subsidise market creation.

It may be the case that the transition between bidding and trading periods needs to be smoothed out,
and observation of market dynamics close to the close of bidding will be needed.

### Oracle Selection

In the future, it may be desirable to extend the set of prices available to binary options.
It needs to be decided asset prices are appropriate to allow users to build binary options markets upon,
and which are not. Further to this, it may be the case that oracle system needs to be extended beyond the existing
Elysian data feeds; which feeds (if it is a restricted set), and how to perform the extension are still open
questions.

### External Integrations

It will be necessary to decide how to filter and display markets on dApps and other interfaces; whether integration with
external platforms would be valuable, and which platforms, is another avenue that may be fruitful to investigate.

One such example would be the ability to instantiate a Uniswap pool automatically when entering the trading phase, to
provide immediate liquidity to the new binary options.

### Forced Option Exercise

In the current design, at the expiry of a market, the value of any unexercised options is
given to the account that cleans up the market. However, in the future it may be useful to allow these options
to be force-exercised after the maturity period by external parties, who would receive a portion
of the value owed to these wallets.

---

## Configurable Values (Via ECCP)

| Symbol                | Initial Value | Description                                                                                            |
| --------------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| \\(C\\)               | 1000 sUSD     | The minimum value of the initial capitalisation of a new binary option market. This is a value of USD. |
| \\(\phi\_{pool}\\)    | 0.8%          | The platform fee rate paid to the fee pool. This is a decimal number in the range \\([0, 1]\\).        |
| \\(\phi\_{creator}\\) | 0.2%          | The fee rate paid to the creator of a market. This is a decimal number in the range \\([0, 1]\\).      |
| \\(\phi\_{R}\\)       | 5%            | The fee rate to refund a bid. This is a decimal number in the range \\([0, 1]\\).                      |
| max oracle price age  | 2 hours       | The oldest a price update can be to be considered acceptable for resolving a market.                   |
| expiry duration       | 26 weeks      | How long options can be exercised before their market is eligible to be destroyed.                     |
| max time to maturity  | 2 years       | A safety constraint that limits how far in the future a maturity date can be set at market creation.   |

---

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).