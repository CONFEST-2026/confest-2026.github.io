---
name: "Reasoning About Probabilistic Loops, Moment by Moment"
speakers:
  - Ezio Bartocci
categories:
  - Invited
  - Joint
  - CONCUR
  - FMICS
  - Q+F
hide: false
---

 

Probabilistic programs can be use to model  systems that must cope with
uncertainty — randomised algorithms, Bayesian inference pipelines, and
cyber‑physical systems. Their formal verification is difficult because
probabilistic choices, nondeterminism and potentially unbounded loops interact
in complex ways. Our work tackles this difficulty by turning stochastic
reasoning into symbolic algebra that can be solved automatically.

We introduce Prob‑Solvable loops, a large class of (possibly infinite)
probabilistic loops whose statistical moments can always be expressed as
closed‑form solutions of linear recurrence equations. This property lets us
compute exact expectations, variances and higher‑order moments analytically—no
sampling required. By encoding discrete, Gaussian, conditional linear‑Gaussian
and dynamic Bayesian networks as polynomial probabilistic loops, the same
machinery yields automated exact inference, filtering, sensitivity analysis and
sampling procedures.

Beyond the polynomial setting we delineate a hierarchy of solvable versus
unsolvable probabilistic loops and extend moment‑based techniques to loops with
non‑polynomial updates. These extensions broaden the reach of symbolic analysis
to many stochastic programs that fall outside the original scope.

The theoretical methods are implemented in two fully automated tools. POLAR
provides a general algebraic framework for exact symbolic analysis of a wide
range of stochastic models, and AMBER combines martingale reasoning with
asymptotic bounds from recurrences to prove or refute probabilistic termination
(almost‑sure, positive almost‑sure and non‑termination) of polynomial loops.

The unifying idea is simple: express expected values and higher‑order moments
as systems of recurrence equations, then apply automated algebraic solvers to
obtain exact or asymptotically tight quantitative properties. This blend of
probability theory, formal methods and symbolic computation makes the
verification of uncertain systems practical and scalable, delivering precise
guarantees that would otherwise be out of reach.
