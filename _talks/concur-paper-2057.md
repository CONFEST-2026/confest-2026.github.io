---
name: "Concurrent Visibility: higher-order concurrency with first-order store"
speakers:
  - Iwan Quémerais
  - Guilhème Jaber
  - Ken Sakayori
  - Davide Sangiorgi
categories:
  - CONCUR
hide: false
---

We propose an Operational Game Semantics for a
(call-by-value)
concurrent higher-order language with first-order store
(references
may contain other references or first-order values such as
integers
or booleans; however they may not store higher-order values
such as functions).
We adapt the game-semantic notion of visibility,
which semantically captures the absence of higher-order
references and developed for sequential higher-order
languages, to a concurrent setting.  We thus define a
complete-trace preorder (a complete trace intuitively
representing a `completed' sequence of interactions between
a term and
its environment).  We prove soundness of the preorder with
respect
to the ordinary contextual preorder, by introducing a
synchronization-based composition of semantic
configurations and
establishing an observational adequacy result.  We also
prove
completeness for the subset of the language in which
functions
return first-order values.

Technically, in contrast to the  case of  sequential
visibility,
in the labeled
transition semantics we have to account for the presence of
multiple
active threads with possibly different visibilities, and of
a
tree-like structure for managing the dependencies among the
threads so
created. Moreover,  in the completeness proof we have to
reason on families
of traces, rather than single traces, as in concurrent
setting the
order among certain actions of a trace cannot be enforced.
