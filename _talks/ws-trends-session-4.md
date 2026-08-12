---
name: "Abstract Operational Reasoning"
speakers:
  - Henning Urbat
categories:
  - Trends
  - Invited
hide: false
---

One of the key desiderata on any well-behaved process or programming language is its compositionality: if a component of a process or program is replaced with a behaviourally equivalent one, then the behaviour in the whole should remain unaffected. Standardly, each type of language (e.g. concurrent, probabilistic, stateful, higher-order) and each notion of behavioural equivalence (e.g. trace equivalence, weak or strong bisimilarity, or quantitative variations thereof) requires its own complex reasoning methods for establishing compositionality properties, which are developed ad hoc.

In this talk, I give an overview of recent developments towards a uniform, language-independent approach to compositionality. It builds on various abstractions from category theory, specifically the idea to capture the operational semantics of a given language via a dinatural transformation that distributes the syntax of the langage over its behaviour type, with notions of behavioural equivalence corresponding to suitable choices of fibrations. Fundamental reasoning methods for compositionality, such as Howe’s method or logical relations, emerge at this level of generality and instantiate to a wide variety of different settings.
