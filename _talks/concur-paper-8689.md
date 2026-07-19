---
name: "Reachability in Fixed-Dimensional Continuous VASS"
speakers:
  - Michal Ajdarów
  - A. R. Balasubramanian
  - Łukasz Orlikowski
categories:
  - CONCUR
hide: false
---

Vector Addition System with States (VASS) are a ubiquitous
model of infinite-state systems consisting of a set of
non-negative counters which can be incremented and
decremented. It is known that the reachability problem for
VASS is Ackermann-complete. Because of this huge
complexity, various over-approximations of VASS have been
studied in the literature. One such over-approximation is
continuous VASS (CVASS), in which the counters are
(non-negative) rational numbers and whenever a vector is
added to the current counter values, it is first scaled
with an arbitrarily chosen rational factor between zero and
one. It is known that the reachability problem for CVASS is
NP-complete.

In this paper, we initiate the study of fixed-dimensional
CVASS, i.e., CVASS with a fixed number of counters. We
study both the reachability and coverability problems,
under both unary and binary encodings as well as over both
the non-negative and the rational semantics. This gives
rise to a collection of eight different problems. As our
main result, we prove a complexity dichotomy for all of
these eight problems when the transition vectors are over
the rationals: For dimension 1, all of the eight problems
are in $AC^1$, and so within P, whereas for any dimension
at least 2, all of the eight problems are \NP-complete.
Furthermore, the hardness holds even when the underlying
automaton is acyclic. This presents the first \NP-hardness
result for acyclic unary counter systems. To achieve this
result, we present a new technique called the Egyptian
prime fractions technique.

Finally, we also study these problems when the transition
vectors are over the integers. Except for dimension 2, we
classify the complexity of these problems over the
non-negative semantics: For dimension 1, all of the
problems are in $AC^1$, whereas for dimensions 3 and above,
all of the problems are \NP-complete.
