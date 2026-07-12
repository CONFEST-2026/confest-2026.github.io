---
name: "Exact Evaluation of Probabilistic Programs with Cylindrical Algebraic Decomposition"
speakers:
  - Mohamed Hamza Bandukara
  - Fredrik Dahlqvist
  - Niki Omidvari
categories:
  - Q+F
hide: false
---

We present a method for computing the exact output dis- tribution of small programs with random inputs. Specifically, we are interested in inline programs manipulating sensor data such as e.g. GPS or inertial measurement sensors whose inputs have a known or well- modelled distribution. These programs typically only include relatively few variables, arithmetic operations, square roots and if-else statements. This small syntax allows us to recast the problem of computing the ex- act output distribution as a cylindrical algebraic decomposition problem followed by symbolic integration. We present this method in detail and show with a prototype that it can successfully be applied to benchmarks from the literature on floating-point arithmetic and small programs from open-source sensor libraries.
