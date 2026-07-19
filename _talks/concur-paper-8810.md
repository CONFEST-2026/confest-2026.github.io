---
name: "Sure-almost-sure and Sure-limit-sure Window Mean Payoff in Markov Decision Processes"
speakers:
  - Pranshu Gaba
  - Shibashis Guha
categories:
  - CONCUR
hide: false
---

Given rationals α and β, the sure-almost-sure problem for a
quantitative objective φ in a Markov decision process (MDP)
asks if one can simultaneously ensure that all outcomes of
the MDP have φ-value at least α (i.e., sure α
satisfaction), and with probability 1 the outcome has
φ-value at least β (i.e., almost-sure β satisfaction). The
sure-limit-sure problem asks if for all ε > 0, one can
simultaneously ensure that all outcomes have φ-value at
least α, and with probability at least 1 − ε the outcome
has φ-value at least β. Moreover, if simultaneous
satisfaction of objectives is possible, then one would also
like to construct a strategy (for sure-almost-sure) or a
family of strategies (for sure-limit-sure) that achieves
this. Even if both sure satisfaction and almost-sure
(resp., limit-sure) satisfaction for an objective are
known, combining the two is often non-trivial and requires
novel techniques and approaches.

In this paper, we solve the sure-almost-sure and
sure-limit-sure problems for window mean-payoff objectives.
While it is known that almost-sure satisfaction and
limit-sure satisfaction for window mean-payoff coincide in
MDPs, we show that sure-almost-sure satisfaction is
distinct from sure-limit-sure satisfaction. The window
mean-payoff objective strengthens the standard mean-payoff
objective by requiring that the average payoff of a finite
window that slides over an infinite run be greater than the
given threshold. We study two variants of window mean
payoff: in the fixed variant, the window length ℓ is given,
while in the bounded variant, the length is not given but
is required to be bounded throughout the run. We show that
the sure-almost-sure problem and the sure-limit-sure
problem are both in P for the fixed variant (if ℓ is given
in unary) and are both in NP ∩ coNP for the bounded
variant, matching the computational complexity of sure
satisfaction and almost-sure satisfaction of these
objectives when considered separately. We also give bounds
for the memory requirement of winning strategies for all
considered problems.
