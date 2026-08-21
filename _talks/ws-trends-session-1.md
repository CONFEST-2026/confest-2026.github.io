---
name: "Ensuring Liveness Properties of Distributed Systems with Justness"
speakers:
  - Rob van Glabbeek
categories:
  - Trends
hide: false
---

A liveness property of a distributed system says that something good will eventually happen—typically that some desired goal state will be reached. Like all linear time properties, a liveness property holds for a system iff it holds for all its valid runs. In a system model such as labelled transition systems, a valid run of a real system is modelled by a complete path. We need a completeness criterion such as progress, justness or fairness to tell which paths are complete, and thus represent valid runs. These criteria can be seen as assumptions ones makes on system behaviour. When not making any such assumptions, no meaningful liveness property will ever be ensured.

Progress says that a system will not stop midway its execution without a valid reason. It is too weak an assumption to ensure many crucial liveness properties of distributed systems. Fairness says that if one tries something often enough, it will eventually succeed. While strong enough for the verification of crucial liveness properties, it is actually too strong, and can lead to unwarranted conclusions. Fairness can be seen as a form of wishful thinking. For this reason I proposed, at TRENDS 2017, to base the verification of liveness properties of distributed systems on the assumption of justness, which forms a gulden middle ground between progress and fairness. Sadly, most of pre-2017 concurrency theory may need to be overhauled, as it is not compatible with justness. As an illustration, I gave you two strongly bisimilar systems of which one has a liveness property under the assumption of justness, whether the other does not.

In this talk I describe some further developments of this idea in the last 9 years:

- Just testing complements may- and must-testing, should-testing and reward testing as a 5th way to determine a suitable semantic equivalence and preorder—one that makes as few distinctions as possible, while being compatible with justness.
- Enabling-preserving bisimilarity is a canonical refinement of strong bisimilarity that does justice to justness and allows for local reasoning in proving processes equivalent.
- We found an extension of the De Simone format that ensures enabling-preserving bisimilarity to be a congruence, even for recursion.
- When merely assuming justness instead of fairness, certain version of the classical mutual exclusion protocol become unsolvable. This holds in particular for the mutual exclusion problem as formulated by Dijkstra, and that gave rise to many dozens of papers proposing solutions.
- On a certain class of models, justness could be formalised in the model mu-calculus. Using this, we employed mCRL2 to automatically verify though model checking more than a dozen mutual exclusion protocols under 4 different assumptions on how shared registers really work.

