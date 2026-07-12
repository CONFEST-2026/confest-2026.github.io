---
name: "Algebraic Robust Semantics for Signal Temporal Logic with Graph Operators"
speakers:
  - Sheryl Paul
  - Vidisha Kudalkar
  - Anand Balakrishnan
  - Tianhao Wu
  - Lars Lindemann
  - Jyotirmoy Deshmukh
categories:
  - Q+F
hide: false
---

Spatio-Temporal Logic with Graph Operators (STL-GO) extends Signal Temporal Logic (STL) to multi-agent systems by introducing graph operators that reason about the number of neighboring agents satisfying a property, and multi-agent quantifiers. While Boolean semantics for STL-GO are well-defined, quantitative semantics have not been developed. Existing quantitative semantics for spatio-temporal logics such as STREL are insufficient for the counting constraints in STL-GO's graph operators. Thus, we develop quantitative semantics for STL-GO, as a layered algebraic construction that separates temporal aggregation from graph-operator aggregation (governed by an abstract accumulator with a monotone fold and readout). We prove that soundness and completeness of the full semantics reduce to monotonicity conditions on these components, and show that standard min-max and Boolean instantiations satisfy them automatically. We implement the framework and evaluate it on two multi-agent environments: a 2D bounded region with stochastic Dubins-car dynamics and a 3D Earth-satellite system, under four semantic instantiations (Boolean, min-max, signed-deficit, and hybrid of min-max and signed-deficit), demonstrating the tradeoffs between accumulator choices and reporting scalability in the number of agents and time horizon.
