---
name: "Robust Parameter Learning for Uncertain MDPs"
speakers:
  - Yannik Schnitzer
  - Alessandro Abate
  - David Parker 
categories:
  - Q+F
hide: false
---

Learning-based approaches to verifying unknown Markov decision processes (MDPs) often employ uncertain MDPs. These models use, for example, confidence intervals to capture transition uncertainty and allow synthesis of policies that are robust to this uncertainty. However, this approach typically quantifies uncertainty independently for individual transition probabilities, ignoring dependencies due to shared latent quantities. We propose to learn such models using parametric MDPs (pMDPs), where transition probabilities are expressions over a set of parameters. We project statistical uncertainty from empirical transition frequencies onto the pMDP's parameter space, yielding a probably approximately correct (PAC) uncertainty model for the underlying MDP that respects the algebraic dependencies between transitions. The resulting models are algorithmically challenging to solve, so we propose a hierarchy of sound polytopic outer approximations of the induced confidence set. We implement and evaluate our approach, demonstrating substantially tighter uncertainty estimates than classical interval-based uncertain MDP learning techniques.
