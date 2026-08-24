---
name: "Optimal MDP Repair"
speakers:
  - Venkata Harshavardhan Chinta
  - Sven Schewe
  - Qiyi Tang
  - Shufang Zhu
categories:
  - SNR
hide: false
---

Markov Decision Processes (MDPs) are a standard model for stochastic systems, where a central objective is to maximise the probability of reaching a set of target states. In many scenarios, this probability is fundamentally limited by the underlying system dynamics rather than by suboptimal policies. We address this limitation by introducing optimal MDP repair, where the system can be improved via buyable action upgrades that modify transition behaviour --- at a cost.
 
We consider two settings. In the static setting, upgrades incur a one-off cost and permanently extend the available actions. In the dynamic setting, upgrades are applied during execution and incur a cost per use, leading to accumulated costs over executions. For both settings, we study the budget-constrained problem and the cost-optimal problem. We show that both problems are NP-complete in both settings, and provide mixed-integer linear programming encodings that enable automated repair strategy synthesis using off-the-shelf optimisation solvers. We implement the proposed approach and evaluate it experimentally, demonstrating its feasibility and effectiveness.
