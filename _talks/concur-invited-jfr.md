---
name: "An Introduction to Multi-Environment Markov Decision Processes"
speakers:
  - Jean-François Raskin
categories:
  - CONCUR
  - Invited
hide: false
---

Markov Decision Processes (MDPs) are the standard model for decision-making
under stochastic uncertainty. With full observability, reachability, safety and
parity problems admit efficient algorithms and memoryless pure optimal
strategies. Full observability is, however, often unrealistic. Partially
Observable MDPs (POMDPs) replace it by an observation function, but the price is
steep: most natural problems become undecidable. This motivates the study of
structured subclasses or variants of POMDPs that preserve enough modelling power
while restoring decidability. Multi-Environment MDPs (MEMDPs) are one such
subclass. An MEMDP is a finite family of MDPs with the same state and action
spaces but distinct transition functions, and the active MDP, called the
environment, is fixed throughout the run but hidden from the controller. The
goal is to synthesize a single strategy that works well in every environment.
Two semantics have been considered for MEMDPs: a universal, worst-case one, and
a prior, Bayesian one based on a distribution over environments. We survey the
main results obtained for both semantics since the introduction of the model
in 2014. We cover reachability, parity and Rabin objectives, under the
qualitative criteria (almost-sure, limit-sure) and the quantitative
value-threshold problem, we outline the key algorithmic ideas, and we list a few
open questions.
