---
name: "Categorical Message Passing Language (CaMPL)"
speakers:
  - Priyaa Varshinee Srinivasan
  - Alexanna Little Berg
  - Daniel K. Hashimoto
categories:
  - YR-CONCUR
hide: false
---

Categorical Message Passing Language (CaMPL) is a functional-style concurrent programming language whose semantics is in category theory, more specifically, linear actegories. Its core programming feature is message passing along typed communication channels between concurrent processes. CaMPL also supports controlled non-determinism via 'races' which allow processes to adapt dynamically while they are running, higher-order processes which pass other processes as messages, and custom channel datatypes called protocols and coprotocols which allow one to define recursive channel types or implement session types. 

The type system of CaMPL arises from a Curry-Howard-Lambek-like correspondence for concurrent programming, established by Cockett and Pastro in their paper titled ``The logic of message passing''. This type system ensures that a formal CaMPL program, i.e., one which does not allow general recursion, will never become deadlocked or livelocked. In this talk, we demonstrate the two-tiered type system of CaMPL and how CaMPL enables general recursion, non-cyclic process topologies, and controlled non-determinism through a series of coding examples.
