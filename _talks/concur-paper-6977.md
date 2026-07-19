---
name: "From Coalgebraic Determinization to Belief Construction for Partial Observability"
speakers:
  - Mayuko Kori
  - Kazuki Watanabe
categories:
  - CONCUR
hide: false
---

The belief construction is a fundamental technique for
transforming partially observable systems to fully
observable ones while preserving the relevant semantics. It
plays a central role in the analysis of partially
observable systems, in particular partially observable
Markov decision processes (POMDPs), which is a central
model in artificial intelligence and formal verification.
In this paper, we develop a coalgebraic framework for the
belief construction. To handle observations categorically,
we lift a monad to slice categories and introduce a belief
decomposition that reorganizes states according to their
observations. This allows us to introduce a coalgebraic
generalization of the belief construction, obtained by
combining the belief decomposition with the coalgebraic
determinization of Silva, Bonchi, Bonsangue, and Rutten. In
this framework, we show that the semantics of a partially
observable system coincides with that of the corresponding
belief coalgebra. We then study when the latter further
agrees with the semantics of its fully observable
counterpart, and use this to identify conditions under
which the semantics of a partially observable system
coincides with that of the corresponding fully observable
belief system. As consequences, we recover the standard
equivalence between POMDPs and belief MDPs, and obtain a
new equivalence result for weighted transition systems with
the multiset monad.
