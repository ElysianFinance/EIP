---
eccp: 139
network: Ethereum
title: Re-enable price feeds that certain live markets on Thales Protocol rely on
author: padzank (@padzank)
status: Implemented
created: 2021-09-23T00:00:00.000Z
proposal: https://snapshot.org/#/snxgov.eth/proposal/QmbtDx5nRsuWTzeZ4BqrbfGK7uiHNpDwqRc2ySCW5gCmBn
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the ECCP.-->

Re-enable the deprecated price feeds of sXTZ (Tezos), sRUNE (THORchain), sYFI (yearn.finance), sCRV (Curve DAO Token), sUNI (Uniswap), sXRP (Ripple), sBNB (Binance Coin) and sXAU (Gold Ounce) until their currently live Thales markets are resolved properly.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Per EIP-169, a number of L1 Synths were deprecated. Thales Binary Options protocol currently has 8 live markets that use 8 price feeds of these deprecated L1 Synths that are crucial for resolving the said markets properly on their respective maturity dates.

Those 8 price feeds and their respective markets and maturity dates on Thales are:

- sXTZ (Tezos) XTZ@30.09.2021
- sRUNE (THORchain) RUNE@30.09.2021
- sYFI (yearn.finance) YFI@15.10.2021
- sCRV (Curve DAO Token) CRV@31.12.2021
- sUNI (Uniswap) UNI@31.12.2021
- sXRP (Ripple) XRP@31.12.2021
- sBNB (Binance Coin) BNB@31.12.2021
- sXAU (Gold Ounce) XAU@31.12.2021

To support and properly resolve these 8 markets that are currently live using price feeds from deprecated synths, Thales needs these price feeds re-enabled as soon as possible.

Important disclaimer: Re-enabling these price feeds will NOT re-enable trading of said Synths that propagate these price feeds, hence this ECCP will not have any effect on the Elysian debt pool and this ECCP will not affect the redemption value of outstanding synths.

As per listed maturity dates above, it is visible that the shortest market is due to be resolved in 6 days from the time of writing this ECCP, so we again emphasize the time sensitivity of voting in this ECCP and, hopefully, implementing it before the live markets are due for maturity.

Going forward, Thales protocol will change the architecture so not to depend on the ExchangeRates contract of the Elysian protocol. As soon as all the markets listed above reach maturity, Elysian protocol can remove the mentioned price feeds again without impacting Thales protocol.

## Motivation

<!--The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.-->

With the deprecation of the Synths listed in EIP-169, price feeds for those assets were removed due to complexities of unsettled trades into or out of those Synths that may result in more of the deprecated synth being issued. When Thales took ownership of BinaryOptions contracts, it inheritted the price feeds being served from ExchangeRates contract used by the Elysian protocol. Thales did not anticipate that the deprecation of Synths also entails removing the price feeds of said Synths. This resulted in certain Thales Binary Options markets, that use price feeds from deprecated Synths, to lose a crucial feed needed to resolve these specific markets properly on their respective date of maturity.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
