---
name: "Shielding for Higher-Order Safety"
speakers:
  - Filip Cano
  - Thomas Henzinger
  - Konstantin Kueffner
categories:
  - SNR
hide: false
---

Safety shields restrict controller actions to keep every execution safe. Classical game-based shields use state predicates, which are too coarse when safety depends on velocity, acceleration, jerk, or higher derivatives. We introduce differential safety properties over backward finite differences and show that an order-k property is exactly a predicate over windows of k + 1 states. A baseline reduction solves a safety game over these windows. We present a direct greatest-fixpoint construction to synthesise the same maximally permissive shield while storing only the previous k states, and show that this memory is necessary in general. We improve the synthesis algorithm for hierarchies
of increasing derivative order by presenting an iterative synthesis algorithm that uses lower-order winning regions to prune higher-order games exactly. Experiments on disturbed vehicle games show that both proposed methods outperform the baseline overall, with the iterative method benefiting most from substantial pruning.
