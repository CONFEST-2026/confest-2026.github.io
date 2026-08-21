---
name: "Parallel Abstract Interpretation for Polynomial Programs with Range Bound Assertions"
speakers:
  - Harshit Jitendra Motwani
  categories:
  - YR-CONCUR
hide: false
---

We present a parallel abstract interpretation technique for polynomial programs with assertions presented as unions of range bound constraints. We use the powerset domain of hyper-rectangles to overapproximate sets of reachable states. Our key technical contributions include novel abstract transformers and refinement operators that account for the semantics of polynomial assignments and guards more precisely than earlier work, while remaining amenable to parallelization and efficient implementation. This is achieved by appealing to Farkas’ Lemma and Handelman’s Theorem, and by exploiting geometric properties of unions of hyper-rectangles. Our abstract interpretation technique proves safety properties of many polynomial programs that state-of-the-art abstract interpretation tools fail to prove. We have implemented our approach in a tool called PolyAbs, and experimentally evaluated it on a suite of benchmarks. Our experiments demonstrate the improved precision and broader coverage of PolyAbs vis-a-vis state-of-the-art abstract interpretation tools, including a commercial-grade tool.

This is a joint work with S. Akshay, Supratik Chakraborty, Soroush Farokhnia, Amir Goharshady, and Djordje Zikelic.

Moreover, this is accepted and will be presented in CAV 2026.
