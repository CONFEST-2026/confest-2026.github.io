---
name: "Verification of parametric Markov Automata under time-bounded reachability"
speakers:
  - Kevin van de Glind
  - Matthias Volk
  - Tim Willemse
categories:
  - Q+F
hide: false
---

Analysis of Markov models is of high importance for formal verification. Until now, analysis of Markov Automata required them to be fully specified, which is a considerable restriction as rates may be unknown or influenced by uncertainty of the environment. We introduce parametric Markov Automata (pMA) to capture this uncertainty with parametric transition functions. On these parametrized models, two different synthesis problems for time-bounded reachability properties are considered: I) Does there exist a valuation in the parameter space such that the instantiated model satisfies/violates the property and II) given the parameter space, how can it be partitioned into satisfying and violating regions. Our approach comprises two steps: I) The pMA is discretized to a pMDP and II) through analysis of the pMDP, bounds are obtained for the reachability probability in the parametric MA. This approach solves the above problems up to a specified precision, as the accumulated error terms can be made arbitrarily small.

We implemented the approach using the Storm modelchecker. Our experimental evaluation shows that the main performance bottlenecks originate from the discretization of the pMA.
