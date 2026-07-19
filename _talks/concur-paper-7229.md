---
name: "Monadic Presburger Predicates have Robust Population Protocols"
speakers:
  - Philipp Czerner
  - Javier Esparza
  - Vincent Fischer
  - Roland Guttenberg
  - Julian Pins
  - Simon Reilich
categories:
  - CONCUR
hide: false
---

Population protocols are a model of distributed computation
in which a collection of indistinguishable finite-state
agents interact randomly in pairs to decide a predicate of
their initial configuration. The agents decide by achieving
a stable consensus on whether the predicate holds or not.
It is known that population protocols can decide exactly
the predicates expressible in Presburger arithmetic.

Recently, Lossin et al. have introduced a notion of
protocol robustness against adversarial crash failures.
They show that all atomic Presburger predicates can be
decided by robust protocols, and ask whether the same holds
for every Presburger predicate. We make progress towards
settling this question by proving that all predicates
expressible in monadic Presburger arithmetic have robust
protocols. In addition, we analyze the cost of robustness
in terms of state complexity. We study the ratio between
the number of states of the smallest robust protocol for a
given predicate and the smallest protocol for it. We show
that the cost of robustness is at least double exponential
in the size of the predicate, and prove that the robust
protocols by Lossin et al. for  threshold predicates x <= k
have optimal state complexity.
