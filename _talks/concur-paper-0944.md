---
name: "Wheeler Bisimulations"
speakers:
  - Nicola Cotumaccio
categories:
  - CONCUR
hide: false
---

Over the years, bisimulations have emerged as a pervasive
paradigm, finding applications in numerous areas, including
concurrency theory, model checking, automata theory, logic,
programming languages and category theory. In this paper,
we establish a connection between bisimulations and data
compression. More precisely, we study the relationship
between bisimulations and Wheeler automata (Alanko et al.,
SODA 2020), a class of automata that has received
considerable attention in recent years. The standard notion
of bisimulation is not appropriate, so we introduce
\emph{Wheeler bisimulations}, that is, bisimulations that
respect the convex structure of the considered Wheeler
automata. We show that Wheeler bisimilarity induces a
\emph{unique} minimal Wheeler NFA (analogously to standard
bisimulations). In particular, in the deterministic case,
we retrieve the minimum Wheeler deterministic automaton of
a given language. We also show that the minimal Wheeler NFA
induced by Wheeler bisimulations can be built in linear
time. This is in contrast with standard bisimulations, for
which the corresponding minimal NFA can be built in $ O(m
\log n) $ time (where $ m $ is the number of edges and $ n
$ is the number of states) by adapting Paige-Tarjan's
partition refinement algorithm. Compared to previous
state-reduction techniques, our bisimulation-induced
construction is the first for which (i) we obtain a
\emph{canonical} Wheeler NFA and (ii) the resulting Wheeler
NFA can be built in linear time.
