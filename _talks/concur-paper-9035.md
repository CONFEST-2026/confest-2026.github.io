---
name: "Representing One Letter Weighted Automata Over the Tropical Semiring"
speakers:
  - Shaull Almagor
  - Ismaël Jecker
  - Filip Mazowiecki
  - Łukasz Orlikowski
  - David Purser
  - Henry Sinclair-Banks
categories:
  - CONCUR
hide: false
---

We consider weighted automata over the tropical semiring
Z(min, +). Recently, it was shown that determinisation is
decidable; in this paper we focus on the complexity when
the alphabet is unary. In 2001, Lombardy showed this
problem is decidable. His proof relies on Gaubert's result
that every weighted automaton in this setting can be
effectively turned into an equivalent union of
deterministic weighted automata. We prove Gaubert's result
efficiently, presenting it as a generalisation of Chrobak's
normal form for unary NFA. In particular, we prove that the
equivalent union of deterministic weighted automata can be
represented by a weighted automaton of quadratic size in
the size of the original one, and this representation can
be computed in polynomial time. Building on this we show
that determinisation, and even register minimisation (which
generalises determinisation), is coNP-complete. We complete
the paper with observations that the boundedness problem is
also coNP-complete. Lastly, we provide evidence that all of
these problems are not FPT (by proving coW_1-hardness) when
parametrised by the number of deterministic automata in the
union.
