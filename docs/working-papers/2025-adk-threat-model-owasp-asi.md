---
title: "Threat Model on Google ADK Agents: An OWASP Agentic Security Initiative Perspective"
status: Under Review
date: "2025-09-18"
venue: "Target: KOCSEA 2025 (poster submission)"
authors:
  - Clark Ngo
  - Sam Chung
tags:
  - agentic-ai
  - security
  - google-adk
  - owasp
  - threat-modeling
pdf_link: /research/pdfs/ngo-2025-adk-threat-model.pdf
code_repo: https://github.com/clarkngo/agent-development-kit
bibtex: |
  @unpublished{ngo2025adkthreat,
    title  = {Threat Model on Google ADK Agents: An OWASP Agentic Security Initiative Perspective},
    author = {Ngo, Clark Jason and Chung, Sam},
    note   = {Poster submission, KOCSEA 2025},
    year   = {2025}
  }
abstract: >
  Introduces a threat model tailored for Google Agent Development Kit
  (ADK) agents, using two foundational examples (HOS01A and HOS02A),
  and aligns identified risks with the OWASP Agentic Security
  Initiative (ASI) taxonomy. Identified threats include memory
  poisoning, tool misuse, privilege compromise, intent manipulation,
  cascading hallucinations, and remote code execution risks, with
  corresponding mitigation strategies — sandboxed execution, RBAC,
  anomaly detection, and consensus-based trust validation — proposed
  to strengthen ADK-based agent deployments.
---

<PaperMeta />

## Notes

Poster submission formatted 2025-09-18 for KOCSEA 2025; acceptance not
yet confirmed. Update `status` to `Proceedings`/`Published` once a
decision lands. Example agents referenced (HOS01A, HOS02A) live in the
linked code repository.
