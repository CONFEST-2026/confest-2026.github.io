---
name: "Multi-Objective Statistical Model Checking using Lightweight Strategy Sampling"
speakers:
  - Pedro R. D'Argenio
  - Arnd Hartmanns
  - Patrick Wienhöft
  - Mark van Wijk
categories:
  - Q+F
hide: false
---

Statistical model checking delivers quantitative verification results with statistical guarantees by applying Monte Carlo simulation to formal models. It scales to model sizes and model types that are out of reach for exhaustive, analytical techniques. So far, it has been used to evaluate one property value at a time only. Many practical problems, however, require finding the Pareto curve of optimal tradeoffs between multiple possibly conflicting optimisation objectives. In this paper, we present the first statistical model checking approach for such multi-objective Pareto queries, using lightweight strategy sampling to optimise over the model's nondeterministic choices. We first introduce a sequential scheme that almost surely converges to a statistically sound confidence band bounding the true Pareto curve from both sides in the long run. We then propose three heuristic approaches to obtain a good underapproximation of the true curve in finite time, given an a-priori fixed sampling budget. We implement our new techniques in the (anonymised tool) simulator, and experimentally show their effectiveness on quantitative verification benchmarks.
