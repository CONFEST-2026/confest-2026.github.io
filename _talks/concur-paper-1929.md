---
name: "Graded Semantics of Nominal Systems"
speakers:
  - Hannes Schulze
  - Lutz Schröder
  - Üsame Cengiz
categories:
  - CONCUR
hide: false
---

Nominal automata models and transition systems serve as
formalisms for languages and processes carrying data, and
as such relate closely to classical register-based models.
The paradigm of name allocation in nominal systems helps
alleviate the pervasive computational hardness of
register-based models in a tradeoff between expressiveness
and computational tractability. For instance, regular
nondeterministic nominal automata (RNNAs) correspond, under
their \emph{local freshness} semantics, to a form of lossy
register automata. Unlike the full register automaton
model, RNNAs allow for inclusion checking in elementary
complexity (parametrized PSpace); similarly, trace
inclusion in the underlying nominal transition systems is
in parametrized PSpace. In the present work, we develop a
unified algebraic treatment of spectra of behavioural
equivalences on nominal systems in the framework of graded
monads, working in the setting of universal coalgebra. In
particular, we extend the associated notion of graded
algebraic theory to the nominal setting, and use this to
give an algebraic axiomatization of the (linear-time)
global and local freshness semantics of nominal systems
with name allocation. As an illustration of the benefits of
graded monads, we develop a nominal version of the generic
game characterization of graded semantics, which we
instantiate to obtain trace equivalence games for nominal
transition systems under global and local freshness
semantics.
