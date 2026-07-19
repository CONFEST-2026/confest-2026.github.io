---
name: "Complementing Emerson-Lei Elevator Automata"
speakers:
  - Ondrej Alexaj
  - Vojtěch Havlena
  - Ondřej Lengál
  - Yong Li
  - Nicolas Mazzocchi
categories:
  - CONCUR
hide: false
---

Büchi elevator automata naturally appear in several areas
of formal methods as a structural expressibly-equivalent
subclass of Büchi automata where every strongly connected
component is either deterministic or inherently weak. It
was shown that this class contains the majority of Büchi
automata generated in practical applications, including LTL
model-checking or verification of hyperproperties.
Moreover, the elevator subclass enables more efficient
complementation and determinization algorithms than
unrestricted Büchi automata. In this paper, we introduce
Emerson-Lei elevator automata, which is a generalization of
Büchi elevator automata to richer acceptance conditions. We
provide a complementation algorithm with a significantly
better asymptotic complexity than the best known algorithm
for unrestricted Emerson-Lei automata. The practical
efficiency of our algorithm is demonstrated by an
experimental comparison with the popular state-of-the-art
tool Spot. Our work is, to the best of our knowledge, the
first step towards practical algorithms for complementing,
determinizing, and testing universality and inclusion of
Emerson-Lei automata with rich acceptance conditions.
