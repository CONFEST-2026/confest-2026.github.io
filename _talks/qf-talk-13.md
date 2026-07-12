---
name: "Scalable Reachability Analysis of Linear Continuous Systems with Property-Driven Time-Step Adaptation"
speakers:
  - Mikkel Bjørn
  - Daniel Hansen
  - Grace Melchiors
  - Kim Guldstrand Larsen
  - Christian Schilling
categories:
  - Q+F
hide: false
---

We study safety verification for linear time-invariant systems with bounded inputs in continuous time. The standard approach reduces to a reachability analysis in two steps: first discretize time and then apply a forward analysis in the discretized system. Existing algorithms use either a fixed time step or an adaptive time step that changes based on the approximation error compared to the underlying continuous system. In this paper, we present a novel reachability algorithm that adapts the time step based on a given safety property. Essentially, our algorithm makes the largest possible time step such that it can still prove safety. For this approach to be scalable in practice, we discuss several optimizations such as avoiding the repeated expensive calculation of the matrix exponential during discretization and a careful balance how we tame the approximation error stemming from the states and the inputs. This allows our algorithm to yield a moderate approximation error even when using a large time step, thus requiring much fewer steps than prior algorithms. We demonstrate the effectiveness and scalability on the large-scale SLICOT benchmark suite, where our algorithm consistently outperforms other state-of-the-art approaches.
