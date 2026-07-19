---
name: "On the Encodability of Reversible Process Calculi"
speakers:
  - Ivan Lanese
  - Claudio Antares Mezzina
  - Iain Phillips
  - Irek Ulidowski
  - Shoji Yuen
categories:
  - CONCUR
hide: false
---

Reversibility, allowing to execute a program not only
forwards as usual, but also backwards, has emerged as a
main concept in computing, with applications ranging from
debugging and fault tolerance to biological and quantum
systems. CCSK, a reversible extension of CCS, is a
paradigmatic model of reversible concurrent computation.
In this paper, we investigate the encodability of CCSK into
classical forward-only concurrent models. We establish a
separation theorem showing that there is no basic,
success-sensitive encoding of CCSK into the pi-calculus,
highlighting the strong impact of reversibility on the
expressive power. We then present an encoding of CCSK
processes with only top-level parallel composition into the
internal pi-calculus, correct up to strong bisimilarity.
We also identify a fundamental limitation: no
parallel-preserving encoding of CCSK (with arbitrary
parallel composition) into the pi-calculus can be correct
up to strong bisimilarity.
Finally, we provide a parallel-preserving encoding correct
under a weaker behavioural correspondence: weak mutual
simulation.
Our findings extend the literature of encodability results
to reversible process calculi.
