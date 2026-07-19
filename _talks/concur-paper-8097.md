---
name: "Mean-Payoff-Parity and Lifting Strategies from MDPs to 2-Player Stochastic Games"
speakers:
  - Richard Mayr
  - Mohan Sai Teja Dantam
categories:
  - CONCUR
hide: false
---

We consider the strategy complexity (i.e., memory and
randomization)
of optimal strategies in turn-based 2-player zero-sum
stochastic games.
Results in [Gimbert & Kelmendi:IJGT2023] show how to lift
optimal
memoryless strategies for shift-invariant inverse-submixing
objectives
from MDPs to 2-player stochastic games with an exponential
increase in the number of memory modes. We show the
corresponding lower bound, i.e.,
the extra exponential memory is required in general, even
for randomized strategies.

Moreover, we solve the strategy complexity of the
well-studied
mean-payoff-parity objective in 2-player stochastic games.
This objective is also shift-invariant inverse-submixing,
but easier than the worst case for this class.
  
In MDPs, Maximizer has optimal memoryless randomized
strategies,
while optimal deterministic strategies require exponential
memory.
However, in stochastic games, optimal randomized strategies
require, at least and at most, linear memory (equal to the
number of even colors).
  
Finally, we show that the different construction in
[Gimberty & Zielonka:2009,Bouyer et al.:LMCS2023] for
lifting memoryless (resp. finite-memory)
deterministic strategies from MDPs (resp. 1-player games)
to 2-player games cannot be generalized even to memoryless
randomized strategies.
We construct a shift-invariant objective where Max and Min
each have
optimal memoryless randomized strategies in all MDPs,
but optimal (randomized) Max strategies still require
infinite memory
in deterministic 2-player games.
