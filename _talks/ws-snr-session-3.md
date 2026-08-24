---
name: "Randomised Decision Making: Expressiveness and Complexity"
speakers:
  - James Main
categories:
  - SNR
hide: false
---

Games on graphs are a prevalent framework for automated controller synthesis for reactive systems. Given a game modelling the interaction of a reactive system and its environment, we can construct a controller (enforcing some formal specification) from a good strategy in the game, where a strategy describes the decisions to be made based on the past history of the ongoing play. In many settings, e.g., concurrent, imperfect information or multi-objective settings, pure (i.e., deterministic) strategies do not suffice to play optimally. In the first two cases, randomised decision making can be used to be unpredictable against an adversary, and in the latter case, randomness is useful to balance multiple objectives.
 
This talk will focus on the power and expressiveness of randomised strategies. First, we will survey different definitions of randomised strategies. In particular, we will consider finite-memory strategies, i.e., strategies that can be encoded as finite automata with outputs. Finite-memory strategies are of particular interest for synthesis, as these represent strategies that can be implemented in practice. We will present a complete taxonomy of finite-memory randomised strategies in terms of expressive power. In the second part of the talk, we will focus on multi-objective Markov decision processes (i.e., one-player stochastic games), and provide a complete description of randomisation requirements for this setting. In particular, we show that limited randomisation often suffices for these multi-objective specifications.
 
This talk is based on joint works with Mickael Randour (Université de Mons, Belgium).
