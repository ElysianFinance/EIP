---
eccp: 1
network: Ethereum & Optimism
title: ECCP Purpose and Guidelines
status: Implemented
author: Kain Warwick <@kaiynne>
created: 2019-06-17T00:00:00.000Z
type: Governance
---

## What is an ECCP?

ECCP stands for Elysian Configuration Change Proposal. ECCP's are documents to make a case for modifying one of the system configuration variables. The intent is to provide a clear and detailed history behind each configuration change and the rationale behind it at the time it was implemented. The author of the document is responsible for building consensus within the community and documenting dissenting opinions.

## ECCP Rationale

We intend ECCPs to be the primary mechanisms for proposing configuration changes to Elysian. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the configuration change proposal.

It is highly recommended that a single ECCP contain a single variable change. The more focused the ECCP, the more successful it is likely to be.

An ECCP must meet certain minimum criteria. It must be a clear and complete description of the proposed variable change.

## ECCP Work Flow

Parties involved in the process are the _author_, the [_EIP editors_](#eip-editors), and the [Elysian Engineering Team].

:warning: Before you begin, vet your idea, this will save you time. Ask the Elysian community first if the proposed change is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your ECCP is [the Elysian Discord].

Your role as the champion is to write the ECCP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful ECCP will move along:

```
[ WIP ] -> [ PROPOSED ] -> [ APPROVED ] -> [ IMPLEMENTED ]
```

Each status change is requested by the ECCP author and reviewed by the EIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your ECCP. The EIP editors will process these requests as per the conditions below.

- **Work in progress (WIP)** -- Once the champion has asked the Elysian community whether an idea has any chance of support, they will write a draft ECCP as a [pull request].

- **Proposed** If agreeable, EIP editor will assign the ECCP a number (generally the issue or PR number related to the ECCP) and merge your pull request. The EIP editor will not unreasonably deny an ECCP. Proposed ECCPs will be discussed on governance calls and in Discord. If there is a reasonable level of consensus around the change on the governance call the change will be moved to approved. If the change is contentious a vote of token holders may be held to resolve the issue or approval may be delayed until consensus is reached.

- **Approved** -- This ECCP has passed community governance and is now being prioritised.

- **Implemented** -- This ECCP has been implemented and the variable changed on mainnet.

## What belongs in a successful ECCP?

Each ECCP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the ECCP, including the ECCP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the ECCP.
- Abstract - a short (~200 word) description of the variable change proposed.
- Motivation (\*optional) - The motivation is critical for ECCPs that want to update variables within Elysian. It should clearly explain why the existing variable is not incentive aligned. ECCP submissions without sufficient motivation may be rejected outright.
- Copyright Waiver - All ECCPs must be in the public domain. See the bottom of this ECCP for an example copyright waiver.

## ECCP Formats and Templates

ECCPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that ECCP as follows: `assets/eccp-X` (for eccp **X**). When linking to an image in the ECCP, use relative links such as `../assets/eccp-X/image.png`.

## ECCP Header Preamble

Each ECCP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` eip:` <ECCP number> (this is determined by the EIP editor)

` title:` <ECCP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread\>

` status:` < WIP | PROPOSED | APPROVED | IMPLEMENTED >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <EIP number(s)>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the ECCP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an ECCP is in WIP or Proposed status, a `discussions-to` header will indicate the mailing list or URL where the ECCP is being discussed.

#### `created` header

The `created` header records the date that the ECCP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the ECCP was updated with "substantial" changes. This header is only valid for ECCPs of Draft and Active status.

#### `requires` header

ECCPs may have a `requires` header, indicating the ECCP numbers that this ECCP depends on.

## Auxiliary Files

ECCPs may include auxiliary files such as diagrams. Such files must be named ECCP-XXXX-Y.ext, where “XXXX” is the ECCP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## EIP Editors

The current EIP editors can be found listed in [EIP-1](https://github.com/elysianDAO/EIPs/blob/master/eips/eip-1.md)

## EIP Editor Responsibilities

For each new ECCP that comes in, an editor does the following:

- Read the ECCP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the ECCP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the ECCP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the ECCP is ready for the repository, the EIP editor will:

- Assign an ECCP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this ECCP)

- Merge the corresponding pull request

- Send a message back to the ECCP author with the next step.

Many ECCPs are written and maintained by developers with write access to the Ethereum codebase. The EIP editors monitor ECCP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on ECCPs. We merely do the administrative & editorial part.

## History

The ECCP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the ECCP document should be directed to the EIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: ECCP-1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/synthetixio/**), which is also available by clicking on the History button in the top right of the ECCP.

### Bibliography

[the synthetix discord]: https://discord.gg/a2E6uxk
[pull request]: https://github.com/elysianDAO/EIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[synthetix engineering team]: https://github.com/orgs/elysianDAO/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
