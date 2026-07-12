---
name: "Stability Checking of Markov Jump Linear Systems via Probabilistic Temporal Logic"
speakers:
  - Lena Becker
  - Holger Hermanns
categories:
  - Q+F
hide: false
---

Markov jump linear systems (MJLSs) model dynamical phenomena subject to random switching among multiple linear modes, driven by an underlying Markov chain. Classical notions such as mean and mean-square stability characterize the long-term asymptotic behaviour of the first and second moments of an MJLS, but they can be overly conservative or even misleading when only a specific subset of initial conditions is of interest. We tackle this challenge through the lens of model checking, where reasoning about specific sets of initial conditions is intrinsic to the approach. We begin by formalizing probabilistic computation tree logic (PCTL) on MJLSs, enabling the specification of state-based temporal properties for these systems. Building on this foundation, we extend the logic to capture moment-based stability properties relative to a prescribed set of initial states. While we ultimately do not obtain a decision procedure for the entire base logic, the logical extensions can be handled—albeit with some technical subtleties—by exploiting linear-algebraic techniques.
