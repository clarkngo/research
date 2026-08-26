---
title: "Threat Model on Google ADK Agents: An OWASP Agentic Security Initiative Perspective"
status: Proceedings
date: "2025-11-12"
venue: "29th Colloquium: Cybersecurity Education in the Age of AI, Automation & Ambiguity (CISSE), Seattle University, Seattle, WA"
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
  @inproceedings{ngo2025adkthreat,
    title     = {Threat Model on Google ADK Agents: An OWASP Agentic Security Initiative Perspective},
    author    = {Ngo, Clark Jason and Chung, Sam},
    booktitle = {Proceedings of the 29th Colloquium: Cybersecurity Education in the Age of AI, Automation \& Ambiguity (CISSE)},
    address   = {Seattle, WA},
    year      = {2025}
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

Presented at the 29th Colloquium: Cybersecurity Education in the Age of
AI, Automation & Ambiguity (CISSE), Seattle University, Seattle, WA,
November 12, 2025. The attached PDF was originally formatted 2025-09-18
as a poster submission for KOCSEA 2025 — same paper; not confirmed
whether it was also accepted there. Example agents referenced (HOS01A,
HOS02A) live in the linked code repository.
