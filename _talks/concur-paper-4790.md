---
name: "Parameterized Verification of Asynchronous Round-Based Distributed Algorithms via Reduction to Finite-Counter Systems"
speakers:
  - Nathalie Bertrand
  - Pranav Ghorpade
  - Sasha Rubin
categories:
  - CONCUR
hide: false
---

Traditional model-checking techniques typically verify
distributed algorithms only for a fixed number of
finite-state processes. Parameterized model checking
generalizes this to any number of processes, while still
typically assuming that each process is finite-state. In
this work, we consider asynchronous round-based distributed
algorithms in which each process is infinite-state since it
can execute for an infinite number of rounds.

We show that the parameterized verification problem for
asynchronous round-based distributed algorithms is
undecidable, already for simple specifications.
Nevertheless, as our main contribution, we provide a
reduction to LTL model checking over finite-counter systems
and prove that it is sound and complete. This enables the
use of off-the-shelf, mature symbolic model checkers for
finite-counter systems. We demonstrate the practical
applicability of this reduction by verifying safety and
liveness properties of several asynchronous round-based
consensus and leader-election algorithms using the nuXmv
model checker.
