---
name: "Effective Stochastic Automata Model Checking by Interval Abstraction"
speakers:
  - Annabell Petri
  - Arnd Hartmanns
  - Pedro D'Argenio
categories:
  - Q+F
hide: false
---

Stochastic automata (SA) are a formal stochastic continuoustime model based on countdown timers whose expiration times follow general probability distributions. SA are particularly useful to faithfully model and analyse dependable systems involving faults, maintenance, and repairs. Effective SA analysis approaches have so far been limited to statistical model checking and thus deterministic SA, while previously proposed model-checking techniques apply to limited subclasses of SA only, or do not scale. In this paper, we present the first dedicated SA model checking approach that is general and effective: It puts few restrictions on the input SA, and we show in our experimental evaluation that it works well for nontrivial examples. It combines a refineable interval abstraction of the continuous distributions with a direct application of the "big time steps" semantics of SA, providing upper/lower bounds on maximum/minimum reachability probabilities. We extend the Modest and JANI modelling formalisms with support for SA, and provide a prototype implementation of our approach in Rust.
