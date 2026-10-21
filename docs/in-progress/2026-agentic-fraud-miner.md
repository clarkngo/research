---
title: "Agentic Fraud Mining: Combining Local LLM Orchestration with Anomaly Detection for Privacy-Preserving Financial Log Analysis"
status: Coursework
date: "2026-10-12"
venue: "DS 520: Data Mining (MS Data Science), School of Technology & Computing, City University of Seattle"
authors:
  - Clark Ngo
tags:
  - data-mining
  - fraud-detection
  - anomaly-detection
  - LLM-agents
  - open-weight-models
  - privacy
pdf_link: null
code_repo: https://github.com/clarkngo/agentic-fraud-miner
bibtex: null
abstract: >
  A research prototype that pairs classical anomaly detection with a
  local LLM agent for fraud triage on a PaySim-schema mobile-money
  ledger. Isolation Forest and Local Outlier Factor (label-free) are
  benchmarked against a supervised HistGradientBoosting reference on
  leak-free features (balance-drain ratio, ledger errors, 24-hour
  velocity, fan-in, amount z-score) with a chronological 70/30 split.
  Each top alert is then investigated by qwen2.5:7b running in Ollama,
  which calls allow-listed, Pydantic-typed Pandas tools over
  pseudonymised history and writes a schema-validated audit report, so
  no transaction data leaves the machine. On 27,632 synthetic
  transactions, Isolation Forest reaches 0.485 PR-AUC versus 0.957 for
  the supervised reference. On the top 16 alerts, the agent's FRAUD
  verdicts had 1.00 precision at 0.42 recall, escalating the rest to a
  human, at about 136 seconds per case.
---

<PaperMeta />

## Notes

- Project page and interactive anomaly explorer: [clarkngo.github.io/agentic-fraud-miner](https://clarkngo.github.io/agentic-fraud-miner/)
- Source repo: [github.com/clarkngo/agentic-fraud-miner](https://github.com/clarkngo/agentic-fraud-miner)

Work in progress. Results on the page come from a synthetic demo
dataset; the Kaggle PaySim dataset is planned for full runs. The page
also compares the agent against a rule-based auditor, but that auditor
encodes the synthetic generator's own fraud typology, so it serves as
an upper-bound oracle rather than a fair competitor. The date above is
the repository's creation date.
