---
name: "StochasticBarrier.jl: A Toolbox for Stochastic Barrier Function Synthesis"
speakers:
  - Rayan Mazouz
  - Frederik Mathiesen
  - Luca Laurenti
  - Morteza Lahijanian
categories:
  - Q+F
hide: false
---

We present StochasticBarrier.jl, an open-source Julia-based toolbox for generating Stochastic Barrier Functions (SBFs) for safety verification of discrete-time stochastic systems with additive Gaussian noise. StochasticBarrier.jl certifies linear, polynomial, and piecewise affine (PWA) systems. The latter enables verification for a wide range of system dynamics, including general nonlinear types. The toolbox implements a Sum-of-Squares (SOS) optimization approach, as well as methods based on piecewise constant (PWC) functions. For SOS-based SBFs, StochasticBarrier.jl leverages semi-definite programming solvers, while for PWC SBFs, it offers three engines: two using linear programming (LP) and one based on gradient descent (GD). Benchmarking StochasticBarrier.jl against the state-of-the-art shows that the tool outperforms existing tools in computation time, safety probability bounds, and scalability across over 30 case studies. Compared to its closest competitor, StochasticBarrier.jl is up to four orders of magnitude faster, achieves significant safety probability improvements, and supports higher-dimensional systems.
