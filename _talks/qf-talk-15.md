---
name: "Facing the Core: State-Space Compression of Dynamic Fault Trees via PH-Distributions"
speakers:
  - Nazareno Garagiola
  - Holger Hermanns
categories:
  - Q+F
hide: false
---

Modern systems exhibit complex, time-dependent failure behaviors that demand accurate dependability modeling. Dynamic Fault Trees (DFTs) can capture these behaviors effectively, yielding so-called acyclic phase-type distributions. However, analysing them often suffers from severe state-space explosion, limiting scalability and applicability. This paper introduces two complementary compression techniques rooted in a common foundational concept. We exploit that the matrix representations of acyclic phase-type distributions are not unique, but can be efficiently compressed by studying their longest core series and dropping redundant phases that otherwise are a notorious side effect of model construction. This provides (i) a novel way to compress the state spaces induced by dynamic fault trees, and it also enables (ii) a situation-specific bounding mechanism that further reduces model size while providing upper and lower probability bounds. Both techniques are orthogonal to existing state-space reduction methods. Empirical results demonstrate substantial compression and improved scalability, highlighting the potential of these approaches for DFT analysis and beyond.
