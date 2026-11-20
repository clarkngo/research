---
title: "Forecasting Market Risk from Scratch: Revising GARCH into an Asymmetric, Heavy-Tailed Model for Value-at-Risk"
status: Coursework
date: "2026-10-12"
venue: "DS 623: Math and Statistics for Data Science (MS Data Science), School of Technology & Computing, City University of Seattle"
authors:
  - Clark Ngo
  - Manas Teja Katakam
tags:
  - volatility-modeling
  - GARCH
  - GJR-GARCH
  - value-at-risk
  - maximum-likelihood
  - NumPy
pdf_link: null
code_repo: https://github.com/clarkngo/garch-market-risk
bibtex: null
abstract: >
  Derives GARCH(1,1) from first principles, implements it and its
  maximum-likelihood fitting in NumPy with a hand-written Nelder–Mead
  optimizer, and tests it as a daily Value-at-Risk model on real US
  market returns from the Kenneth R. French Data Library (fit on
  1990–2014, test on 2015–Aug 2026, including the 2020 COVID crash).
  The two assumptions that fail, equal reaction to good and bad news
  and normal shocks, are revised into GJR-GARCH(1,1) with Student-t
  errors. On the test period the revised model has the best
  out-of-sample fit (−log L per day 1.287 vs 1.337) and breaks its 1%
  limit only 2 times during Feb–Apr 2020, against 6 for the original
  and 12 for a naive past-year rule. The fitted α is near 0 while
  γ ≈ 0.14, so in this data only bad days push risk up. A companion
  GitHub Pages portal replays the 2020 crash and other periods in an
  in-browser Value-at-Risk lab.
---

<PaperMeta />

## Notes

- Project page and interactive lab: [clarkngo.github.io/garch-market-risk](https://clarkngo.github.io/garch-market-risk/)
- Slides: [DS 623 GARCH market risk deck](https://clarkngo.github.io/garch-market-risk/presentations/ds623-garch-market-risk.html)
- Source repo: [github.com/clarkngo/garch-market-risk](https://github.com/clarkngo/garch-market-risk)

Work in progress. Draft 1 has been submitted; the portal, slides and
paper body are working drafts built from prototype results on real
data. A Kalman-filter time-varying beta study is kept in the repo as a
backup direction. The date above is the repository's creation date.
