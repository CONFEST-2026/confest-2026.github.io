---
name: "Generalized Bidding Games: Where Bidding and Stochastic Games Meet"
speakers:
  - Ali Asadi
  - Thomas A. Henzinger
  - Ehsan Kafshdar Goharshady
  - Pavol Kebis
  - Kaushik Mallik
categories:
  - CONCUR
hide: false
---

Two-player games on graphs are a classical framework for
analyzing strategic decision making. In turn-based games,
two players move a token along the edges of the graph, and
the right to move the token is determined by the current
vertex. In traditional bidding games---referred to as
\textit{pure} bidding games---the right to move the token
is determined at each step through bidding; here we
consider Richman bidding, where the winning player of a bid
pays the losing player. The winner is decided based on a
temporal or quantitative specification evaluated over the
resulting infinite play.

In this work, we combine turn-based games and pure bidding
games into \textit{generalized} bidding games, with
player-1 vertices, player-2 vertices, and bidding vertices.
This natural and simple generalization of bidding games has
far-reaching consequences. First, we show that, as a model,
generalized bidding games are more expressive than pure
bidding games, and we provide several applications. Second,
and most importantly, we show that generalized Richman
bidding games are structurally equivalent to simple
stochastic games, a well-studied model: they are linearly
interreducible to each other. As was previously known, the
special case of pure Richman bidding games corresponds to
random-turn games. In other words, generalized bidding
games extend pure bidding games in the same way that simple
stochastic games extend random-turn games. We use this
connection to solve generalized Richman bidding games for
temporal (parity) and quantitative (mean-payoff and
discounted-sum) specifications. From a computational
perspective, we establish that generalized bidding games
with parity and mean-payoff specifications retain the best
known upper bounds for turn-based games and pure bidding
games, namely NP$\,\cap\,$coNP.

Finally, we study a repair problem that asks whether
bidding vertices can be assigned ``owners'' so as to bring
the threshold budget required to win the game below a given
target. This problem has direct applications in
compositional policy synthesis for multi-objective
settings, and we show it to be NP-complete.
