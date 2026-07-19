---
name: "Decomposition of Automata recognizing Ideals"
speakers:
  - Mathias Berry
  - Ismaël Jecker
  - Pierre-Cyrille Héam
categories:
  - CONCUR
hide: false
---

Minimizing the size of finite automata is a fundamental
problem in theoretical computer science. Beyond standard
minimization, further reductions can be achieved by
decomposing an automaton into smaller components whose
languages combine via union or intersection to recover the
original language. However, in general, no polynomial-time
algorithm is known for computing such decompositions. In
this paper, we focus on automata that recognize ideals,
that is, languages at level 1/2 in the Straubing–Thérien
hierarchy. Equivalently, these are the languages
expressible as a finite union of languages of the form A*
a_1 A* ... A* a_n A* where A is an alphabet and a_i are
letters of A. We show that the two problems of deciding
whether such a language can be decomposed into an
intersection or a union of smaller automata are decidable
in NL. Moreover, we provide a polynomial-time algorithm
that computes a decomposition into an intersection, if one
exists, while ensuring that the resulting components also
recognize ideal languages.
