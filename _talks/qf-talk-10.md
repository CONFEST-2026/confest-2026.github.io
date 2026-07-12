---
name: "Collective Decision-Making Under Timing Constraints"
speakers:
  - Julia Klein
  - Tatjana Petrov
categories:
  - Q+F
hide: false
---

Achieving consensus is essential for coordinated group de- cisions in collective systems, yet the timescales of consensus dynamics critically depend on system size and interaction mechanisms. In this paper, we study consensus in stochastic swarms of finite size under three timing constraints: time to reach a decision (majority), time to hold a decision, and time to recover from a wrong decision. We propose a formal frame- work for specifying and analysing consensus dynamics as parameterised temporal properties, enabling systematic comparison of mechanistic mod- els. First, we express consensus and recovery as parameterised properties in bounded linear temporal logic (BLTL). Then, we use statistical model checking to compute the consensus and recovery probabilities for fixed parameter values. Finally, we employ Gaussian process classification to approximate the robustness landscape over continuous parameter domains from a limited number of statistical model checking evaluations, thereby enabling efficient, uncertainty-aware exploration of timing parameters. Unlike existing approaches that abstract away either timing constraints or finite population effects, our framework enables systematic exploration of consensus and recovery probabilities across timing parameters for a fixed group size. We demonstrate our methodology in two application scenarios: in swarm robotics, we use our logical specification of consensus to guide model design; in systems biology, we use our consensus notion to elucidate the timescales governing the cell cycle switch.
