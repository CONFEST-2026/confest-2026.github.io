---
name: "Faster algorithm for achieving minimal-size quantum decision diagrams"
speakers:
  - Juul Sanders
  - Sebastiaan Brand
  - Tim Coopmans
categories:
  - Q+F
hide: false
---

The decision diagram (DD) data structure enables fast linear-algebra calculations by bringing vectors into a normal form and subsequently merging equivalent ones, yielding a minimally-sized DD modulo the equivalence relation. One fruitful application area is quantum-circuit simulation, where the vectors represent quantum states, i.e., pseudo-boolean functions $\{0, 1\}^n \rightarrow \mathbb{C}$. Local-Invertible Map Decision Diagrams (LIMDD) merge LIM-equivalent (typically Pauli-gate equivalent) vectors and have been theoretically proven exponentially faster for simulation than other well-developed data structures, not the least other common DD variants. However, these exponential advantages have not fully materialized yet in existing implementations, for which the normal-form procedure, which is a highly complex algorithm, is either absent or only partially implemented.

We here present a novel normal-form algorithm for Pauli-LIMDDs, achieving a worst-case speedup from $O(n^3)$ to $O(n^2)$ for an $n$-qubit DD node with a single child node while keeping the $O(n^3)$ runtime in case of two distinct children nodes. We implement the algorithm as part of QolDDer, our home-developed Pauli-LIMDD simulator for quantum circuits, written from scratch in C/C++. The implementation realizes the theoretically-proven advantages of Pauli-LIMDDs on Clifford circuits, is significantly faster than the existing LIMDD simulators on such circuits, and on a public quantum-circuit data set often outperforms them by an order of magnitude. In the future, we envision that our work will enable further application and development of LIMDD variants, not only for quantum design tasks, but also for analysis of linear-algebra based systems in general.
