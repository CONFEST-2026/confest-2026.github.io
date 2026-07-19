---
name: "On the Complexity of Robust Markov Decision Processes and Bisimulation Metrics"
speakers:
  - Marnix Suilen
  - Guillermo Perez
categories:
  - CONCUR
hide: false
---

Robust Markov decision processes (RMDPs) extend standard
Markov decision processes (MDPs) to account for uncertainty
in the transition probabilities. RMDPs have an uncertainty
set that defines a set of possible transition functions,
each of which induces a standard MDP. The natural objective
in an RMDP is to optimize the discounted cumulative reward
under the worst-case transition function in the uncertainty
set. We study the complexity of the associated threshold
problem for RMDPs with polytopic uncertainty sets in
halfspace representation. Previous results focused on
approximating the optimum or restricted attention to
specific subclasses of RMDPs, such as interval MDPs or
$L_\infty$-RMDPs. Our contributions are threefold: (1) For
(s,a)-rectangular RMDPs, we prove that robust policy
evaluation is in P via robust linear programming, and that
the threshold problem is in NP. As a corollary, robust
policy iteration is a polynomial-time algorithm for these
RMDPs when the discount factor is fixed. (2) For
$s$-rectangular RMDPs, we show that the threshold problem
is in PSPACE via the first-order theory of the reals. (3)
We establish lower bounds by reducing both parity games and
bisimulation metrics between MDP states to the RMDP
threshold problem. A polynomial-time algorithm for the
threshold problem would resolve the long-standing open
question of whether parity games can be solved in
polynomial time. The reduction from bisimulation metrics
also yields a practical benefit: it allows us to apply
robust policy iteration as a more efficient alternative to
the standard fixed-point iteration, as our empirical
evaluation demonstrates.
