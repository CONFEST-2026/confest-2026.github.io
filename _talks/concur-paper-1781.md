---
name: "An MSO Framework for Weak-Memory Verification and Robustness"
speakers:
  - Giovanna Kobus Conrado
  - Andreas Pavlogiannis
categories:
  - CONCUR
hide: false
---

Memory models are formal specifications of
concurrent-program executions, accounting for weak
behaviors introduced by compiler and architectural
optimizations. The increase of their number and complexity
has spawned efforts for uniform verification across whole
classes of models, by axiomatizing the models in an
adequate metatheory that admits a uniform treatment. In
this work, we formally study Monadic Second-Order logic
(MSO) as a metatheory for weak memory, by proving results
on the treewidth and MSO-expressibility of various popular
weak-memory models, as this combination allows us to
uniformly tackle several verification problems. In summary,
our results are as follows.

First, we prove that SC executions have bounded treewidth,
but already TSO executions do not. Second, we prove that a
broad range of models, including Release/Acquire and the
full RC20, are MSO-axiomatizable, while others, such as
Strong Release/Acquire and TSO, are not, using connections
to fine-grained complexity theory. Finally, we introduce
the notion of reads-from robustness, as an extension to
recent work on coarse robustness criteria. We show that our
treewidth bounds (both upper and lower) have far-reaching
algorithmic implications for our MSO-axiomatizable models
MM: there is an algorithm that, for every program P, either
verifies P under MM or reports that P is not reads-from
robust against MM. Overall, our results establish a rich
and versatile theoretical framework for weak-memory
verification and robustness.
