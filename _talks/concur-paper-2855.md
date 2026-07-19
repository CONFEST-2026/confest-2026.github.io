---
name: "Revisiting True Concurrency Bisimilarities: On the Role of Backward Ready Multisets and Why They Are Not Enough for HPB and HHPB"
speakers:
  - Andrea Esposito
  - Marco Bernardo
categories:
  - CONCUR
hide: false
---

Bisimilarities over stable configuration structures can be
divided into three families. In the first one -- including
interleaving, step, pomset, and forward-reverse
bisimilarities -- no isomorphism is required between the
events matched during the bisimulation game. In the second
one -- including weak history-preserving, weak
history-preserving pomset, and weak hereditary
history-preserving bisimilarities -- a labeling- and
causality-preserving isomorphism is required between
matched events, which is local to each pair of
configurations related by the bisimulation relation. In the
third one -- including history-preserving and hereditary
history-preserving bisimilarities -- the aforementioned
isomorphism is built incrementally. We revisit true
concurrency bisimilarities by introducing variants that
additionally check that the backward ready multisets of
related configurations coincide. While the distinguishing
power of the bisimilarities of the second and third
families does not change, the power of the revised
bisimilarities of the first family is equal to that of the
bisimilarities of the second family. The latter
bisimilarities can thus be characterized by replacing local
isomorphisms with simply counting incoming transitions. In
contrast, backward ready multisets are not enough to
characterize the third family in the simultaneous presence
of autoconcurrency and non-local conflicts. We show that a
further check for the existence of diamond and half-diamond
substructures is necessary in that case to achieve the same
distinguishing power as incremental isomorphisms.
