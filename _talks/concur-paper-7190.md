---
name: "Monitoring Discounted Sum Properties"
speakers:
  - Filip Cano
  - Thomas Henzinger
  - Konstantin Kueffner
  - Ege Saraç
categories:
  - CONCUR
hide: false
---

Runtime monitoring of quantitative signals faces a
fundamental trade-off between volatility and
over-aggregation: instantaneous observations are noisy,
while long-run averages obscure local structure.
Localisation measures such as discounted averages offer a
principled middle ground, yet remain poorly understood in
runtime verification. This paper studies discounted sums
from a monitoring perspective, in both deterministic and
stochastic settings. We formalize the discounted monitoring
problem and show that exact, sound monitoring of discounted
sums cannot be achieved with finite memory. To overcome
this impossibility, we introduce
$\varepsilon$-approximately sound monitoring, deriving
explicit bounds on memory and observation requirements. We
then extend the framework to stochastic processes via
expected discounted sums, defining pointwise and uniform
$(\varepsilon,\delta)$-soundness notions, establishing
statistical optimality, and proving impossibility beyond a
precision threshold.
We also formalize the resource complexity of deterministic
discounted monitoring via affine register machines and
prove a tight worst-case lower bound.
Finally, we present a specification language for arithmetic
expressions over multiple discounted sums with synchronous
and asynchronous semantics, and evaluate our approach on
practical scenarios including algorithmic fairness.
