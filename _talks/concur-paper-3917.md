---
name: "Classification under uncertainty"
speakers:
  - Ofer Leshkowitz
  - Orna Kupferman
categories:
  - CONCUR
hide: false
---

Consider a fixed number of disjoint regular languages
$L_1,\ldots,L_k \subseteq \Sigma^*$. A {\em classifier\/}
for $L_1,\ldots,L_k$ is a transducer that receives each
moment $t$ in time an input letter $\sigma_t \in \Sigma$
and outputs an index in $\{1,\ldots,k\}$ such that if the
word $\sigma_1 \cdots \sigma_t$, generated so far, is in
some (unique) language $L_i$, then this index is $i$.
Classifiers arise naturally in runtime monitoring and
online stream processing, where a system must continuously
determine which of several specifications or behaviors is
currently being realized.
The problem of generating classifiers of minimal size has
been well studied.

In many applications, the input alphabet is of the form
$2^P$, for a finite set $P$
of signals. There, the complexity of classification stems
not only from the languages but also from the presence of
uncertainty, namely when the valuation to some of the
signals may not be known.
We introduce and study {\em classification under
uncertainty}, where the input words may be partially
observed.
We consider three sources for uncertainty: (1) {\em Given}:
the input to the problem specifies which signals may be
sensed after each behavior. (2) {\em Privacy}: the input
includes a list of secret behaviors, and the classifier
should restrict sensing so that secrets are not revealed.
(3) {\em Budget}: Sensing of signals incurs a cost, which
the classifier should minimize.
