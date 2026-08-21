---
name: "Duality for Horn Disjunctive Linear Relations"
speakers:
  - Om Swostik Mishra
  - Christoph Haase
categories:
  - YR-CONCUR
hide: false
---

Horn disjunctive linear relations (Horn DLRs) are an expressive polynomial-time decidable fragment of the existential theory of the reals with addition and order that generalize linear programs. They are given by conjunctions of Horn clauses, each of which consists of at most one linear inequality and a positive Boolean combination of linear disequalities. Horn DLRs find applications in automata theory and artificial intelligence. Beyond satisfiability, a problem arising in many contexts is that of finding a solution to a Horn DLR that optimizes a linear objective function.

The first contribution of this paper is an affirmative answer to the question implicitly left open by Blondin and Esparza [Log. Methods Comput. Sci., 20(1) (2024)] whether Farkas duals of Horn DLRs can efficiently be constructed. A Farkas dual of a Horn DLR Φ is a Horn DLR Φ' such that a solution of Φ' serves as a certificate of unsatisfiability of Φ, and vice versa. Building upon this result, we generalize the classical framework of strong duality in linear programming to Horn DLRs: Every primal Horn DLR linear optimization problem has a logarithmic-space computable dual problem, and when both problems are feasible, their optimal solutions coincide. In particular, a solution to the dual problem can serve as a certificate of optimality.
