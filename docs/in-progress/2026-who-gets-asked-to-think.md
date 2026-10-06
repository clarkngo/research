---
title: "Who Gets Asked to Think? An Audit of AI Coding Assistants' Explanations for Novice Programmers in English and Taglish"
status: Active WIP
date: "2026-10-02"
venue: "Pilot study (ThinkCheck); short write-up planned"
authors:
  - Clark Ngo
tags:
  - computing-education
  - LLM
  - AI-audit
  - novice-programmers
  - multilingual
  - Taglish
pdf_link: null
code_repo: https://github.com/clarkngo/who-gets-asked-to-think
bibtex: null
abstract: >
  A pilot audit of whether AI coding assistants ask beginners to think
  when they ask for help. Twenty original beginner Python tasks are
  sent to three models (Claude Sonnet 5.5, a Gemini model, and
  qwen2.5:7b run locally) under two framings ("just make it" vs. "help
  me learn") and in two languages (English and Taglish, the everyday
  Tagalog–English mix many Filipino learners use), with three runs per
  prompt for 720 responses in total. Each response's code is run in a
  sandbox against hidden unit tests, and a stratified sample of about
  200 responses is hand-coded for evaluative-judgment support:
  explaining how the code works, stating assumptions and limits,
  flagging uncertainty, suggesting how to verify, inviting the learner
  to think, and scaffolding instead of solving. The study audits model
  outputs only; no learners take part.
---

<PaperMeta />

## Notes

- Project page: [clarkngo.github.io/who-gets-asked-to-think](https://clarkngo.github.io/who-gets-asked-to-think/)
- Source repo: [github.com/clarkngo/who-gets-asked-to-think](https://github.com/clarkngo/who-gets-asked-to-think)

Research questions, tasks, hidden tests, and English and Taglish
prompts are done; the pilot run, hand coding, and analysis have not
happened yet. This entry stays `Active WIP` until results and the short
pilot write-up are posted. The date above is the repository's creation
date.

The project page notes that Claude, one of the audited models, also
helped build the tooling and compare the Taglish prompts against the
English. The author wrote the prompts and does the hand coding.
