---
name: "Compositionality in Coalgebraic Trace Semantics"
speakers:
  - Robin Jourde
  - Henning Urbat
  - Sergey Goncharov
  - Stelios Tsampas
  - Jonas Forster
categories:
  - CONCUR
hide: false
---

A key requirement on any well-behaved process language is
its \emph{compositionality}: behavioural equivalence of
processes should be respected by the constructors of the
language. Turi and Plotkin's abstract GSOS provides an
elegant bialgebraic framework for modelling rule formats
that guarantee compositionality from the outset. Their
original results, however, are restricted to
compositionality of strong bisimilarity, a rather
fine-grained notion of process equivalence. In the present
paper, we demonstrate that Turi and Plotkin's approach also
applies to trace equivalence, which only observes external
actions of processes. To this end, we revisit the general
compositionality result of their original theory and
present it in a refined form with regard to the required
naturality conditions. This step makes abstract GSOS
applicable over Kleisli categories and thereby enables
reasoning about compositionality in the setting of
coalgebraic trace semantics. As our main contribution, we
introduce De Simone laws, a type of GSOS laws over Kleisli
categories, and prove that their operational models are
compositional for coalgebraic trace equivalence. This
result recovers and explains compositionality of the
well-known De Simone rule format for labelled transition
systems in a natural categorical setting. As a further
application, we derive from our general framework a novel
De Simone-type format for probabilistic systems,
compositional for probabilistic trace equivalence.
