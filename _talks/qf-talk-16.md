---
name: "Adaptive Importance Sampling for Static Fault Trees with Two-State Markovian Components"
speakers:
  - Leonardo Paroli
  - Laura Carnevali
  - Enrico Vicario
categories:
  - Q+F
hide: false
---

In the simulation of complex systems, quantities of interest are often limited to specific events with extremely low probability. This becomes particularly relevant in various processes of reliability engineering. Rare event simulation (RES) addresses this challenge by focusing the evaluation on a subset of the space of outcomes, reducing estimator variance to achieve an efficient trade-off between estimator accuracy and sample size. We propose an adaptive importance sampling (AIS) technique for the estimation of top-event failures in static fault trees (SFTs) with self-healing leaf components that alternate two states, operational and failed, with exponential inter-times. To this end, we leverage cross-entropy (CE) adaptation to iteratively refine a parametric importance function by tilting failure and repair rates of individual components in a balanced way. In particular, at each time instant, we decompose a system-level stochastic optimization problem into a set of component-level subproblems, jointly solved by recursive updates. Experimental results on a set of randomly generated models with increasing event rarity show better estimator accuracy and variance reduction with respect to alternative baselines.
