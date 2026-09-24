---
title: "Agent-Poison: Benchmarking Indirect Prompt Injection Attacks and Defenses on Open-Weight AI Agents"
status: Active WIP
date: "2026-09-17"
venue: "Target: TBD (academic write-up in progress)"
authors:
  - Clark Ngo
tags:
  - prompt-injection
  - agent-security
  - LLM-security
  - benchmark
  - open-weight-models
  - OWASP
pdf_link: null
code_repo: https://github.com/clarkngo/agent-poison
bibtex: null
abstract: >
  A live benchmark of indirect prompt injection against tool-using AI
  agents: 648 logged model runs (324 simulated attacks plus matched
  clean-task controls) across three locally hosted open-weight models
  (Qwen2.5 7B, Llama 3.1 8B, Mistral 7B via Ollama). Three attack
  styles (direct override, contextual deception, delimiter
  manipulation) are tested against four defenses (none, XML
  delimiters, system-message reinforcement, dual-prompt sanitizing).
  Findings so far: defense effectiveness is model-specific, dual-prompt
  sanitizing was the only defense that took two of the three models to
  0% attack success (at roughly double the per-call cost), and
  single-trial measurements proved misleading until replicated eight
  times at nonzero temperature.
---

<PaperMeta />

## Notes

- Live benchmark report: [clarkngo.github.io/agent-poison](https://clarkngo.github.io/agent-poison/)
- Source repo: [github.com/clarkngo/agent-poison](https://github.com/clarkngo/agent-poison)

The report page is written for readers new to AI security. A fuller
academic write-up (related work, methodology detail) is being drafted
alongside it, so this entry stays `Active WIP` until that exists. The
date above is the repository's creation date.

The report discloses that Claude (Anthropic), operating via Claude
Code, designed and implemented the benchmarking harness, ran the
experiments, and wrote the page, while the author directed the research
questions, reviewed and approved the methodology, verified results, and
is responsible for the final content.
