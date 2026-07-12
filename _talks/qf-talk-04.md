---
name: "State-Space Abstractions for Parametric Timed Games"
speakers:
  - Mikael Bisgaard Dahlsen-Jensen
  - Jaco van de Pol
  - Laure Petrucci
categories:
  - Q+F
hide: false
---

Synthesizing controllers for real-time systems under both timing uncertainty and adversarial environments requires exploring prohibitively large symbolic state spaces. While zone inclusion checking has been applied to Parametric Timed Games, more aggressive abstractions from the Parametric Timed Automata and Timed Games literature---double inclusion, zone merging, hull abstractions, and location-based abstraction---have not yet been lifted to the parametric game setting. We define a general abstraction framework for Parametric Timed Games, instantiate it with each of the aforementioned abstractions, and prove that the framework preserves correctness of parameter synthesis and winning strategies. Experimental results on an established production cell benchmark and a novel adversarial IoT case study show that the abstractions significantly improve scalability, solving instances previously intractable for existing techniques.
