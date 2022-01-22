import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Elysian Improvement Proposals" />
    <h1 className="page-heading">
      Elysian Improvement Proposals{' '}
      <a
        href="https://discordapp.com/channels/413890591840272394/"
        rel="nofollow"
      >
        <img
          className="max-w-full"
          src="https://camo.githubusercontent.com/294a3116521e16f9164255dd2d386b24767e2610/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3431333839303539313834303237323339342e7376673f636f6c6f723d373638414434266c6162656c3d646973636f7264266c6f676f3d6874747073253341253246253246646973636f72646170702e636f6d25324661737365747325324638633937303162393861643433373262353866313366643966363566393636652e737667"
          alt="Discord"
          data-canonical-src="https://img.shields.io/discord/413890591840272394.svg?color=768AD4&amp;label=discord&amp;logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg"
        />
      </a>
    </h1>
    <p>
      Elysian Improvement Proposals (EIPs) describe standards for the
      Elysian platform, including core protocol specifications, client APIs,
      and contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/eips/eip-1">EIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the EIPs{' '}
        <a href="https://github.com/elysianDAO/EIPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your EIP to your fork of the repository. There is a{' '}
        <a href="https://github.com/elysianDAO/EIPs/blob/master/eip-x.md">
          template EIP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Elysian's{' '}
        <a href="https://github.com/synthetixio/EIPs">EIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final EIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new EIP and
      assign it a number before merging it. Make sure you include a <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the EIP as a whole.
    </p>
    <p>
      If your EIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that EIP as follow: <code>eips/assets/eip-X</code> (for eip <b>X</b>). When linking to an
      image in the EIP, use relative links such as{' '}
      <code>../assets/eip-X/image.png</code>.
    </p>
    <p>
      When you believe your EIP is mature and ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to a Elysian Council member
      on discord by searching members with the "Elysian Council" role or finding
      them within the #governance channel. The Elysian Council will schedule in
      a call with the EIP author to go through the EIP in more detail.
    </p>

    <p>
      Once assessed, a EIP is moved into <code>Feasibility</code> and a Core
      Contributor is assigned. The Core Contributor will work with the author to
      conduct a feasibility study. Once the Author and the Core Contributor are
      satisfied, a EIP is moved to <code>EC Review Pending</code>. Once the
      Elysian Council has formally reviewed the EIP during the EIP presentation
      they can either move it to a vote or send it back to{' '}
      <code>Feasability</code>. A vote is conducted within the{' '}
      <code>elysiandao.eth</code> snapshot space connected on the
      <a href="https://staking.elysian.finance/"> staking </a> dApp. If a vote by
      the Elysian Council reaches a super majority, the EIP is moved to{' '}
      <code>Approved</code>, otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the EIP has been implemented by either the protocol DAO or the EIP
      author and relevant parties, the EIP is assigned the{' '}
      <code>Implemented</code> status. Community members who successfully reach
      this stage are entitled to a reward from the Elysian Protocol.
    </p>

    <h2>EIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new EIP before the
        Elysian Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Feasibility</strong> - a EIP that is being assessed for
        feasability with an assigned Core Contributor
      </li>
      <li>
        <strong>EC Review Pending</strong> - a EIP that is awaiting a Elysian
        Council Review after the Author and Core Contributor are satisfied with
        feasibility
      </li>
      <li>
        <strong>Vote Pending</strong> - a EIP that is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - a EIP that has successfully reached a super
        majority Elysian Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - a EIP that has failed to reach a
        supermajority Elysian Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - a EIP that has been released to main-net.
      </li>
    </ul>
  </Main>
)

export default IndexPage
