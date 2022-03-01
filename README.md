# EIP [Discord](https://discord.gg/gNFfBfV4he) [Twitter](https://twitter.com/Elysian_Finance) [Telegram](https://t.me/ElysianFinance)

Elysian Improvement Proposals (EIP) describe standards for the Elysian platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [EIP-1](https://github.com/ElysianFinance/EIP/blob/master/content/eip/eip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your EIP to your fork of the repository. There is a [template EIP here](eip-x.md).
4.  Submit a Pull Request to Elysian's [EIPs repository](https://github.com/elysianfinance/EIP).

Your first PR should be a first draft of the final EIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new EIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.elysian.finance](https://research.elysian.finance) where people can discuss the EIP as a whole.

If your EIP requires images, the image files should be included in a subdirectory of the `assets` folder for that EIP as follow: `assets/eip-X` (for eip **X**). When linking to an image in the EIP, use relative links such as `../assets/eip-X/image.png`.

When you believe your EIP is mature and ready to progress past the Draft phase, you should reach out to a Elysian Council member on discord by searching members with the "Elysian Council" role or finding them within the #governance channel. The Elysian Council will schedule in a call with the EIP author to go through the EIP in more detail.

Once assessed, a EIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a EIP is moved to `EC Review Pending`. Once the Elysian Council has formally reviewed the EIP during the EIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `elysiandao.eth` snapshot space connected to our [dApp](https://elysian.finance/) . If a vote by the Elysian Council reaches a super majority, the EIP is moved to `Approved`, otherwise it is `Rejected`.

Once the EIP has been implemented by either the protocol DAO or the EIP author and relevant parties, the EIP is assigned the `Implemented` status. There is a 100 pLYS (subject to changes) bounty for proposing a EIP that reaches the `Implemented` phase.

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

# Automerger

The EIP repository contains an "auto merge" feature to ease the workload for EIP editors. If a change is made via a PR to a draft EIP, then the authors of the EIP can Github approve the change to have it auto-merged by the [eip-automerger](https://github.com/bakaoh/eip_automerger) bot.
