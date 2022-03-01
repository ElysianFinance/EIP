---
eip: 1
network: Ethereum 
title: EIP Purpose and Guidelines
status: Implemented
author: King Luxor
created: March 1, 2022
type: Governance
---

## What is an EIP?

EIP stands for Elysian Improvement Proposal, it has been adapted from the EIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Elysian are transparent and well governed. An EIP is a design document providing information to the Elysian community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## What is an ECCP?

ECCP stands for Elysian Configuration Change Proposal. ECCP's are documents for making a case for modifying one of the system configuration variables. The intent is to provide a clear and detailed history behind each configuration change and the rationale behind it at the time it was implemented. The author of the document is responsible for building consensus within the community and documenting dissenting opinions.

## EIP & ECCP Rationale

We intend EIPs and ECCPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Elysian. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single EIP contain a single key proposal or new idea. The more focused the EIP, the more successful it is likely to be.

An EIP or ECCP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## EIP Work Flow

Parties involved in the process are the _author_, the [_EIP editors_](#eip-editors), the [Elysian Core Contributors] and the Elysian community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Elysian community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your EIP or ECCP is [the Elysian Discord].

Your role as the champion is to write the EIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful EIP will move along:

![EIP-workflow.png](https://github.com/ElysianFinance/EIP/blob/master/static/eip-workflow.png)

Each status change is requested by the EIP author and reviewed by the EIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your EIP. The EIP editors will process these requests as per the conditions below.

- **Draft** -- This EIP is work-in-progress and being reviewed by a Elysian Council member with the champion.
- **Feasibility** -- This EIP is assigned with a Core Contributor and underdoing a feasibility study.
- **EC Review Pending** -- This EIP is being formally reviewed by the Elysian Council to decide on voting or sent back for feasibility study.
- **Vote Pending** -- This EIP is scheduled for voting on [our portal](https://elysian.finance/)
- **Approved** -- This EIP has passed community governance and is now being prioritised for development.
- **Rejected** -- This EIP has failed to reach community consensus.
- **Implemented** -- This EIP has been implemented and deployed to mainnet.

## What belongs in a successful EIP?

Each EIP or ECCP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the EIP, including the EIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the EIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (\*optional) - The motivation is critical for EIPs that want to change Elysian. It should clearly explain why the existing specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All EIPs must be in the public domain. See the bottom of this EIP for an example copyright waiver.

## EIP Formats and Templates

EIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that EIP as follows: `assets/eip-X` (for eip **X**). When linking to an image in the EIP, use relative links such as `../assets/eip-X/image.png`.

## EIP Header Preamble

Each EIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` eip:` <EIP number> (this is determined by the EIP editor)

` title:` <EIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread at research.elysian.finance\>

` status:` < Draft \| Feasibility \| EC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <EIP number(s)>

` * resolution:` \<a url pointing to the resolution of this EIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the EIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an EIP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL at [research.elysian.finance](https://research.elysian.finance/) where the EIP is being discussed.

#### `created` header

The `created` header records the date that the EIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the EIP was updated with "substantial" changes. This header is only valid for EIPs of Draft and Active status.

#### `requires` header

EIPs may have a `requires` header, indicating the EIP numbers that this EIP depends on.

## Auxiliary Files

EIPs may include auxiliary files such as diagrams. Such files must be named EIP-XXXX-Y.ext, where “XXXX” is the EIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## EIP Editors

The current EIP editors are

` * King Luxor (@kingluxor)`

` * Charles Montesquie (@cmontesq)`

## EIP Editor Responsibilities

For each new EIP that comes in, an editor does the following:

- Read the EIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the EIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the EIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the EIP is ready for the repository, the EIP editor will:

- Assign an EIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this EIP)

- Merge the corresponding pull request

- Send a message back to the EIP author with the next step.

Many EIPs are written and maintained by developers with write access to the Ethereum codebase. The EIP editors monitor EIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on EIPs. We merely do the administrative & editorial part.

## History

The EIP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the EIP document should be directed to the EIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: EIP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/ElysianFinance/), which is also available by clicking on the History button in the top right of the EIP.

### Bibliography

[the elysian finance discord]: https://discord.gg/gNFfBfV4he
[pull request]: https://github.com/ElysianFinance/EIP/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[elysian finance engineering team]: https://github.com/orgs/ElysianFinance/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).