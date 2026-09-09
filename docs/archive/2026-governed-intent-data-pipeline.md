---
title: "Governed Intent-Driven Data Engineering: An Architectural Framework for AI-Assisted Data Pipelines Across the Analytics Lifecycle"
status: Coursework
date: "2026-08-26"
venue: "DS 522: Data Acquisition and Analytics (MS Data Science), School of Technology & Computing, City University of Seattle"
authors:
  - Clark Ngo
tags:
  - data-engineering
  - LLM
  - data-governance
  - guardrails
  - lakehouse
pdf_link: /research/pdfs/ngo-2026-governed-intent-data-pipeline.pdf
code_repo: https://github.com/clarkngo/governed-intent-data-pipeline
bibtex: |
  @misc{ngo2026gidp,
    title        = {Governed Intent-Driven Data Engineering: An Architectural Framework for AI-Assisted Data Pipelines Across the Analytics Lifecycle},
    author       = {Ngo, Clark Jason},
    howpublished = {Course project, DS 522, City University of Seattle},
    year         = {2026}
  }
abstract: >
  Proposes a platform-agnostic architectural framework for AI-assisted
  data pipelines that translates natural-language analytics intent
  into governed, auditable pipeline actions, addressing governance,
  data lineage, observability, and safety risks such as
  non-deterministic transformations, data leakage, and silent pipeline
  failures. Introduces GIDP-Core, a TypeScript control-plane engine
  that converts a request into a structured plan, evaluates
  policy-as-code guardrails (identity/RBAC, prompt-injection
  detection, catalog authorization, tool allowlists, execution
  quotas), compiles permitted operations into sandboxed DuckDB SQL,
  runs data-quality assertions, and records hash-chained audit
  lineage. A companion browser-native prototype demonstrates the
  framework end-to-end against synthetic data, using Databricks
  (Lakeflow, AI/BI Genie, Unity AI Gateway) as an illustrative
  reference architecture rather than the deployed environment.
---

<PaperMeta />

## Notes

Term project 3 (TP03) for DS 522, MS in Data Science, City University
of Seattle.

- Source repo: [github.com/clarkngo/governed-intent-data-pipeline](https://github.com/clarkngo/governed-intent-data-pipeline)
- Interactive browser laboratory: [clarkngo.github.io/governed-intent-data-pipeline](https://clarkngo.github.io/governed-intent-data-pipeline/)
- GIDP-Core demo: [clarkngo.github.io/gidp-core](https://clarkngo.github.io/gidp-core/)
- Core engine package: [github.com/clarkngo/gidp-core](https://github.com/clarkngo/gidp-core) (v0.1.0)
- Presentation slides: <a href="/research/presentations/governed-intent-data-pipeline.html" target="_blank" rel="noopener">governed-intent-data-pipeline.html</a> · <a href="/research/presentations/governed-intent-data-pipeline.pptx" target="_blank" rel="noopener">.pptx</a>
- Extended slide deck (illustrated, AI-generated via Google NotebookLM from the paper): <a href="/research/presentations/governed-intent-data-architecture.pdf" target="_blank" rel="noopener">.pdf</a> · <a href="/research/presentations/governed-intent-data-architecture.pptx" target="_blank" rel="noopener">.pptx</a>

Videos:

- [How GIDP Core Governs AI Pipelines](https://youtube.com/shorts/ETmAHKtFEws) (short)
- [Governed Data Pipelines](https://youtu.be/nIRbC19XmDQ)
- [Securing AI pipelines with plan before execute](https://youtu.be/lYtsZNpgruk)

Submitted 2026-08-26.
