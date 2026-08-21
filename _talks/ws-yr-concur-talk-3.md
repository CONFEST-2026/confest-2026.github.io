---
name: "Opacity Problems in Timed Automata"
speakers:
  - Sarah Dépernet
categories:
  - YR-CONCUR
hide: false
---

In cybersecurity, an attacker may try to deduce sensitive data (passwords, secret behaviour of a critical system) from external observations of the system, performing what we call a side channel attack. For instance, they may analyse the power consumption, emissions of electro-magnetic waves or even timing information (such as the total execution time of the system). We focus on this last category of side channel attacks, which we study on timed automata (TA). This expressive model, introduced by Alur and Dill [AD94], consists of finite automata extended with clocks to measure and react to the passage of time. The secret is represented by some special locations in the TA. Each run produces some observation: the timed word composed of the labels of the taken transitions with their timestamps. We say that such an observation is opaque when it is produced both by runs visiting a secret location and by runs visiting no secret location, making uncertain for the attacker whether a secret behavior happened or not. The opacity problem asks whether all possible observations of a given TA are opaque, thus certifying its resilience to side channel attacks if so. This problem being undecidable in the general case of TA [Cas09], we investigated it for subclasses of TA and for various declinations such as limiting the size of the observation made by the attacker, or the number of clocks. We present the (un)decidability and complexity results of several variants of the opacity problem in TA, making a short overview of two recent papers ([ADL24],[ADL26]). The presentation will develop the concrete (and of interest for everyday life) example of a nosy neighbour trying to infer the hiding place of your gold bars. 

References
[AD94] Rajeev Alur and David L. Dill. A theory of timed automata. Theoretical Computer Science, 126(2):183–235, April 1994.
[ADL24] Étienne André, Sarah Dépernet, and Engel Lefaucheux. The bright side of timed opacity (extended version). Technical Report abs/2408.12240, arXiv, September 2024.
[ADL26] Étienne André, Sarah Dépernet, and Engel Lefaucheux. Buffered control for opacity in timed automata. to be published (CONCUR 2026), 2026.
[Cas09] Franck Cassez. The dark side of timed opacity. In Jong Hyuk Park, Hsiao-Hwa Chen, Mohammed Atiquzzaman, Changhoon Lee, Tai-Hoon Kim, and Sang-Soo Yeo, editors, ISA, volume 5576 of Lecture Notes in Computer Science, pages 21–30. Springer, 2009.
