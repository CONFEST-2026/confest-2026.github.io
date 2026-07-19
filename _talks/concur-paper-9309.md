---
name: "Buffered control for opacity in timed automata"
speakers:
  - Étienne André
  - Sarah Dépernet
  - Engel Lefaucheux
categories:
  - CONCUR
hide: false
---

Timed automata are an extension of finite automata that can
measure and react to the passage of time, handling
real-time constraints by using clocks. The timed opacity
problem, where an attacker attempts to infer from observed
actions and timestamps whether a secret location was
visited, was shown undecidable for timed automata.
Execution-time opacity is a decidable though limited
setting in which the attacker attempts to detect whether
the secret location was visited, by only relying on the run
duration. Here, we significantly extend this setting, by
allowing the attacker to observe all observable actions, in
the right order and with only the integral parts of their
timestamps—which we call buffered observations. We first
prove the inter-reducibility of full opacity (observations
must not leak the visit of the secret location) and weak
opacity (the attacker might prove that the location was not
visited, but not that it was visited) in this new setting;
this result also holds in the controlled setting, in which
we aim at dynamically defining a sequence of sets of
enabled actions ensuring opacity with buffered
observations. Then, we prove the undecidability of the
problem of existence of a sequential control strategy
ensuring opacity under buffered observations. Finally and
most importantly, we prove that decidability is retrieved
in two cases, with their tight theoretical
complexities—with and without control. These two
assumptions express realistic limitations of the
controller. The first case is when the strategy of the
controller changes at most an a priori fixed number of
times per time unit. The second case is when all
controllable actions are observable and distinguishable by
an attacker.
