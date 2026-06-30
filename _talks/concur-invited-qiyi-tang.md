---
name: CONCUR Invited Talk 1
speakers:
  - Qiyi Tang
categories:
  - Invited
  - CONCUR
hide: false
---

#  Word Automata with Limited Nondeterminism

We survey word automata with limited nondeterminism, a family of models lying
between deterministic and fully nondeterministic automata. While determinism
provides a simple algorithmic basis for verification, reactive synthesis, and
probabilistic analysis, determinisation incurs large state blow-up, especially
for ω-regular specifications. Limited nondeterminism offers a middle ground: it
preserves some of the succinctness of nondeterministic automata while retaining
enough structure for algorithmic use. We focus on three notions: unambiguous
automata, in which each accepted word has at most one accepting run;
good-for-games automata, whose nondeterministic choices can be resolved on the
fly from the input prefix; and good-for-MDPs automata, which preserve optimal
satisfaction probabilities when composed with MDPs. We compare these models in
terms of expressiveness, succinctness, decision problems, minimisation, and
applications to model checking, synthesis, reinforcement learning, and
stochastic planning. Finally, we discuss how these threads converge: recent work
has used good-for-games minimisation as a preprocessing step to reduce
unambiguous and good-for-MDPs automata before composition, yielding more compact
constructions for probabilistic analysis and planning. We present this as a
recurring algorithmic pattern — resolving an automaton’s nondeterminism before
it is amplified by the product with the system — that unifies otherwise separate
lines of work.
