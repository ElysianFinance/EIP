# EIPs [![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/) [![Twitter Follow](https://img.shields.io/twitter/follow/elysianDAO.svg?label=elysianDAO&style=social)](https://twitter.com/elysianDAO)

Elysian Improvement Proposals (EIPs) describe standards for the Elysian platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [EIP-1](eips/eip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your EIP to your fork of the repository. There is a [template EIP here](eip-x.md).
4.  Submit a Pull Request to Elysian's [EIPs repository](https://github.com/synthetixio/EIPs).

Your first PR should be a first draft of the final EIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new EIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.elysian.finance](https://research.elysian.finance) where people can discuss the EIP as a whole.

If your EIP requires images, the image files should be included in a subdirectory of the `assets` folder for that EIP as follow: `assets/eip-X` (for eip **X**). When linking to an image in the EIP, use relative links such as `../assets/eip-X/image.png`.

When you believe your EIP is mature and ready to progress past the Draft phase, you should reach out to a Elysian Council member on discord by searching members with the "Elysian Council" role or finding them within the #governance channel. The Elysian Council will schedule in a call with the EIP author to go through the EIP in more detail.

Once assessed, a EIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a EIP is moved to `EC Review Pending`. Once the Elysian Council has formally reviewed the EIP during the EIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `elysiandao.eth` snapshot space connected on the [staking](https://staking.elysian.finance/) dApp. If a vote by the Elysian Council reaches a super majority, the EIP is moved to `Approved`, otherwise it is `Rejected`.

Once the EIP has been implemented by either the protocol DAO or the EIP author and relevant parties, the EIP is assigned the `Implemented` status. There is a 500 sUSD bounty for proposing a EIP that reaches the `Implemented` phase.

# EIP Statuses

- **Draft** - The initial state of a new EIP before the Elysian Council and core contributors have assessed it.
- **Feasibility** - a EIP that is being assessed for feasibility with an assigned Core Contributor
- **SC_Review_Pending** - a EIP that is awaiting a Elysian Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a EIP that is awaiting a vote.
- **Approved** - a EIP that has successfully reached a super majority Elysian Council vote in favour.
- **Rejected** - a EIP that has failed to reach a super-majority Elysian Council vote in favour.
- **Implemented** - a EIP that has been released to main-net.

# Validation

EIPs must pass some validation tests.

It is possible to run the EIP validator locally:

```
npm install (if not done already)
npm run test
```

# JSON API

All EIPs & ECCPs data is available in JSON format by status at the following urls:

## EIPs

```
https://eips.elysian.finance/api/eips/draft.json
https://eips.elysian.finance/api/eips/feasibility.json
https://eips.elysian.finance/api/eips/sc-review-pending.json
https://eips.elysian.finance/api/eips/vote-pending.json
https://eips.elysian.finance/api/eips/approved.json
https://eips.elysian.finance/api/eips/rejected.json
https://eips.elysian.finance/api/eips/implemented.json
```

## ECCPs

```
https://eips.elysian.finance/api/eccp/draft.json
https://eips.elysian.finance/api/eccp/feasibility.json
https://eips.elysian.finance/api/eccp/sc-review-pending.json
https://eips.elysian.finance/api/eccp/vote-pending.json
https://eips.elysian.finance/api/eccp/approved.json
https://eips.elysian.finance/api/eccp/rejected.json
https://eips.elysian.finance/api/eccp/implemented.json
```

# Automerger

The EIP repository contains an "auto merge" feature to ease the workload for EIP editors. If a change is made via a PR to a draft EIP, then the authors of the EIP can Github approve the change to have it auto-merged by the [eip-automerger](https://github.com/bakaoh/eip_automerger) bot.
