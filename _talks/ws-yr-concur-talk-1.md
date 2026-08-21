---
name: "Forward-Responsibility in Petri Nets"
speakers:
  - Caroline Lemke
  - Heike Wehrheim
categories:
  - YR-CONCUR
hide: false
---

Responsibility allocation is a fundamental problem in the analysis of distributed systems: How do we attribute individual contributions to a joint outcome? Petri nets are a model of distributed (concurrent) systems in which actors are represented by transitions. We propose the notion of forward-responsibility of coalitions of such actorsas the existence of a winning strategy in a game played against the remaining transitions, with a reachability or safety objective. In our formalisation we introduce a novel game model on Petri nets, where a central concept is precedence determining priorities between conflicting transitions. We show how to compute forward-responsibility in Petri nets via a reduction to imperfect information games and demonstrate the expressiveness of our framework by encoding existing models of responsibility allocation. This allows us to adopt a new perspective and attribute responsibility not only to actors, but also directly to actions.
