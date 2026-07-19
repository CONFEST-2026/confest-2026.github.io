---
name: "when Behaviours Have to Happen: An Axiomatic Model of Causality in Behaviour-Oriented Concurrency"
speakers:
  - Luke Cheeseman
  - Elias Castegren
  - Tobias Wrigstad
  - Sophia Drossopoulou
  - Matthew Parkinson
categories:
  - CONCUR
hide: false
---

Behaviour-oriented concurrency (BoC) is a recently
established programming model in which programmers define
concurrent operations that execute atomically across
multiple isolated resources. This allows for expressive
interactions but introduces complex causal dependencies
determined by dynamic resource overlap. Previous work
defines the causal guarantees operationally, but mixes
intended design constraints with incidental implementation
details, leading to unintended causal orders. BoC is now
being implemented across multiple languages and runtimes,
all relying on the operational descriptions of causality.

This paper develops an axiomatic model of BoC executions
that makes the intrinsic orders explicit and derives the
intended causal relation from their interaction. Using a
set of representative programs and candidate executions, we
motivate the design of this causal relation. We then prove
that a representative minimal core calculus for BoC is
sound with respect to this axiomatic model. Together, these
results provide an implementation-independent foundation
for reasoning about BoC causality across runtimes,
schedulers and optimisation decisions.
