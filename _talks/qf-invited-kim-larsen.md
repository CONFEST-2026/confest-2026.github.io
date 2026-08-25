---
name: "Monitoring of Timed and Quantitative Systems"
speakers:
  - Kim G. Larsen
categories:
  - Q+F
  - Invited
hide: false
---

Runtime verification of temporal properties over timed observations is increasingly important
for cyber-physical systems such as autonomous vehicles, smart grids, and medical devices. In
this talk, we present recent advances in predicting whether temporal properties will eventually
be satisfied or violated in continuous real-time settings. We consider properties expressed in
Metric Interval Temporal Logic (MITL) and as Timed Büchi Automata, and develop symbolic online
monitoring algorithms based on zone techniques from Timed Automata model checking. These
algorithms efficiently address key challenges including time divergence, timing uncertainty,
and varying parametric delays, without resorting to expensive parametric verification.

Monitoring can be further strengthened by exploiting assumptions about the possible future
behaviour of the system, represented as Timed Automata. We introduce an assumption-based
runtime verification framework and discuss extensions to weighted and probabilistic settings
using Weighted Timed Automata and Stochastic Timed Automata.

The algorithms have been implemented in UPPAAL and show encouraging initial results. Finally,
we present new theoretical results on monitorability: for deterministic Timed Muller Automata,
monitorability is decidable and verdict bounds are effectively computable, whereas
monitorability is undecidable for nondeterministic Timed Büchi Automata.
