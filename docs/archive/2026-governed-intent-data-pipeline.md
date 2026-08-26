---
title: "Governed Intent-Driven Data Engineering: An Architectural Framework for AI-Assisted Data Pipelines Across the Analytics Lifecycle"
status: Coursework
date: "2026-01-01"
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

- Interactive browser laboratory: [clarkngo.github.io/governed-intent-data-pipeline](https://clarkngo.github.io/governed-intent-data-pipeline/)
- Core engine package: [github.com/clarkngo/gidp-core](https://github.com/clarkngo/gidp-core) (v0.1.0)

Exact submission date not printed in the document; year taken from the
paper's own self-citation.
