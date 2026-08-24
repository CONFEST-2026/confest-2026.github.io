---
name: "Active Learning for the Synthesis of POMDP Policies"
speakers:
  - Prince Mathew
categories:
  - SNR
hide: false
---

Partially Observable Markov Decision Processes (POMDPs) are a fundamental model for decision-making under uncertainty, with applications ranging from robotics and autonomous systems to planning and verification. However, synthesising correct policies for POMDPs is, in general, undecidable. Existing approaches face a fundamental trade-off. Sampling-based techniques, such as reinforcement learning and Monte Carlo methods, scale well to large problems but provide no formal correctness guarantees, making them unsuitable for safety-critical applications. In contrast, formal synthesis techniques offer correctness-by-construction but often struggle to scale.
 
In this talk, I will present a synthesis framework that combines automata learning, model checking, and policy-generation techniques to bridge this gap. Inspired by Angluin's L* algorithm, the framework views policy generation as a membership oracle and model checking as an equivalence oracle to actively learn finite-state controllers. The membership oracle can be instantiated by any algorithm capable of suggesting a suitable action for a given action-observation history. I will present the theoretical foundations of the framework and show that it is relatively complete: whenever the policy induced by the membership oracle is regular, the algorithm is guaranteed to synthesise a correct finite-state controller. Finally, I will present experimental results demonstrating that the proposed method successfully solves threshold-safety problems that remain challenging for existing formal synthesis tools. This work illustrates how active learning provides a principled bridge between scalable policy-generation techniques and formal methods, opening a promising new direction for POMDP policy synthesis.
