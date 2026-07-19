---
name: "On the Continuity of the Probabilistic Bisimilarity Distance"
speakers:
  - Syyeda Zainab Fatmi
  - Stefan Kiefer
  - David Parker
  - Franck van Breugel
categories:
  - CONCUR
hide: false
---

The probabilistic bisimilarity distance provides a
quantitative measure of behavioural difference for labelled
Markov chains, but it may be discontinuous under
perturbations of the transition probabilities. This lack of
continuity undermines its applicability to empirically
derived models, where transition probabilities are often
approximations. Recently, Fatmi et al. (CAV 2025)
introduced robust probabilistic bisimilarity as a
sufficient condition for continuity at distance zero. In
this paper, we show that it is also a necessary condition,
that is, two states are robustly probabilistic bisimilar if
and only if their probabilistic bisimilarity distance is
small for any small enough perturbation of the transition
probabilities. We further extend robustness to
non-bisimilar state pairs to establish a complete
characterization for continuity of the probabilistic
bisimilarity distance. Based on this characterization, we
develop a polynomial time algorithm to decide continuity.
Finally, we complement our theoretical contributions with
an experimental evaluation demonstrating the proposed
approach in practice. Our results show that the extra step
of deciding continuity requires minimal additional cost
when compared to computing the probabilistic bisimilarity
distance.
