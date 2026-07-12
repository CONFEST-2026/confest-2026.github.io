---
name: "Witnesses and Counterexamples for Timed Bisimulation"
speakers:
  - Alexander Lieb
  - Malte Lochau
categories:
  - Q+F
hide: false
---

Timed automata provide a modeling formalism for time-critical properties of reactive systems with discrete-state/continuous-time behaviors. To handle the infinite state space of timed automata, recent verification tools use zone graphs, a symbolic semantic model that guarantees sound results, at least for properties reducible to reachability problems. If we instead want to compare the behavior of two timed automata, checking for timed trace equivalence is undecidable. Fortunately, timed bisimulation equivalence is decidable, but currently available checks do not provide useful explanations of the results. To overcome this limitation, we use a recently proposed extension of zone graphs by so-called virtual clocks. The extension not only facilitates effective tool support for timed bisimilarity checking but also enables the derivation of useful explanations from the results. If timed bisimilarity holds, all witnesses derivable from the composed symbolic representation of both models are indeed valid for both models. If timed bisimilarity does not hold, we describe how to obtain counterexamples, making explicit the behavioral differences. These witnesses/counterexamples may serve as test cases in later stages of system refinement.
