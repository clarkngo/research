---
title: "Scenario-Driven Statistical Modeling: An AI-Guided Framework for Deriving and Revising Algorithmic Baselines from Scratch"
status: Coursework
date: "2026-10-12"
venue: "DS 623: Math and Statistics for Data Science (MS Data Science), School of Technology & Computing, City University of Seattle"
authors:
  - Clark Ngo
tags:
  - statistics-education
  - robust-regression
  - huber-loss
  - IRLS
  - NumPy
  - AI-tutoring
pdf_link: null
code_repo: https://github.com/clarkngo/scenario-stat-modeling
bibtex: null
abstract: >
  Proposes a five-stage, AI-guided teaching framework (Derive →
  Implement → Shock → Diagnose → Revise) in which learners derive a
  baseline estimator from first principles, implement it in vectorized
  NumPy without high-level ML libraries, stress it with a realistic
  scenario shock, trace the failure to a specific assumption, and
  derive a revised model. The worked case revises ordinary least
  squares into Huber M-estimation solved by iteratively reweighted
  least squares on a synthetic housing-price scenario. When 20% of
  training prices are recorded ten times too large, OLS clean-test
  RMSE rises from 40.3 to 573.9 (in $1000s), while Huber-IRLS holds at
  45.5. A companion GitHub Pages portal renders the derivations and
  runs both estimators in the browser with an adjustable shock.
---

<PaperMeta />

## Notes

- Project page and interactive lab: [clarkngo.github.io/scenario-stat-modeling](https://clarkngo.github.io/scenario-stat-modeling/)
- Source repo: [github.com/clarkngo/scenario-stat-modeling](https://github.com/clarkngo/scenario-stat-modeling)

Work in progress. The page is a prototype draft: section text is a
working outline, and the results come from the synthetic prototype
experiment (200 replications). A public housing dataset is planned for
the full study. The date above is the repository's creation date.
