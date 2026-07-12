---
name: "The Cost of Repetition: A Compositional Scalability Model for Attack Trees"
speakers:
  - Clemens Fruböse
  - Eva Hetzel
categories:
  - Q+F
hide: false
---

Repeated cyber attacks rarely entail constant attacker costs: Tool reuse, learning effects, detection, and access burn-out can produce economies or diseconomies of scale. Yet existing quantitative attack tree analyzes typically treat costs and impacts as static values and therefore miss how attacker incentives change under repetition. In this paper, we add a previously overlooked dimension to attack tree based risk analysis, which is the number of attack executions. We lift cost and damage from static scalars to execution-indexed functions and provide compositional AND/OR propagation rules that yield path-level cost and damage profiles, enabling joint cost-damage analysis under repeated executions. The resulting cost-damage relations can be non-concave due to scalable costs and nonlinear damage effects (e.g., economies of scale, saturation, or threshold behavior). On illustrative attack trees, we show that scalability reshapes optimal attacker choices across objectives (net benefit, return on investment, budget- and target-constrained): A path optimal for a single execution may be suboptimal for multiple executions, even switching paths across executions can be optimal. This accounts for why attacker strategies evolve with scale. Our framework provides a sound basis to compare such objectives, to anticipate path choices as attack executions increase, and to support quantitative, repeatable security assessments.
