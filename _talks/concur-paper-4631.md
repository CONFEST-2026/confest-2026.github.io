---
name: "WinPop: Making populations win together"
speakers:
  - Nathalie Bertrand
  - Patricia Bouyer
  - Luc Lapointe
  - Corto Mascle
categories:
  - CONCUR
hide: false
---

We consider a novel graph-based problem, in which a
population of arbitrary size aims at achieving
a common objective. More specifically, WinPop is a
synthesis problem defined by a finite graph
with edges labels in { ✓ , − , p }. The instance is
positive if there exists a sequence (πi)i∈N of
infinite paths such that for any fixed population size N ∈
N>0, there is a path whose N-th transition
is labelled ✓ and all previous paths have their N-th
transition labelled by − .
Alternatively, WinPop can also be cast as a 2D-tiling
problem with vertical and horizontal
constraints: the horizontal constraint reflects the
possible paths in the input graph, and the
vertical one encodes that a ✓ -label eventually occurs,
before any p -label. Finally, WinPop also
corresponds to the existence of a coalition strategy for a
reachability objective in parameterized
concurrent games.
We use algebraic tools to show that the problem can be
solved in polynomial space. First we
exhibit a finite semigroup whose elements summarize
coalition strategies over a finite interval of
population sizes. Then, we characterize the existence of
winning strategies by the existence of
particular elements in this semigroup. Finally, we provide
a matching complexity lower bound, to
conclude that WinPop is PSPACE-complete.
