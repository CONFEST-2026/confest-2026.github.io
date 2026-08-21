---
name: "Supporting Phased Atomicity in the OpenCL Memory Model"
speakers:
  - Haining Tong
  - Keijo Heljanko
categories:
  - YR-CONCUR
hide: false
---

Formal verification of GPU programs is increasingly important as GPUs handle business-critical and high-performance computing workloads. Despite this, existing GPU memory-model verification tools largely operate at the level of abstract litmus tests rather than on real source code kernel implementations. Tools such as GPUVerify, Herd-based analyzers, and prior formalization work of the OpenCL (Open Computing Language) memory model focus on small, hand-written programs that exercise specific synchronization behaviors. In practice, GPU programs can be compiled into low-level intermediate representations such as SPIR-V. 

Unfortunately, the semantics of the compiled OpenCL flavor SPIR-V binaries differ fundamentally from the assumptions made by the OpenCL source-level memory model specification. One of the most consequential gaps between specification and practice concerns the treatment of atomicity. Atomicity in OpenCL is enforced at the level of storage locations: atomically accessed variables must be declared atomic, and once declared, all accesses to that location must be atomic. While at the intermediate representation (IR) level, SPIR-V and PTX define atomicity per instruction, allowing atomic and non-atomic accesses to the same location to coexist. In SPIR-V, memory ordering, scope, and semantics are attached directly to individual operations (e.g., OpAtomic*). Mainstream toolchains, including Clang/LLVM and Google’s clspv also routinely compile OpenCL kernels containing such mixed-access patterns into valid SPIR-V binaries. As a result, the strict per-location atomicity discipline imposed by the current OpenCL memory model is not preserved by compilation: programs that are transformed into valid executable binaries may no longer admit a faithful interpretation under the source-level formal model.

This mismatch raises a more fundamental question than IR verification itself: should atomicity be regarded as a property of locations, or of accesses? In this work, we explore the latter direction by revising the OpenCL memory model to define atomicity per access rather than per location. Our goal is not to propose a definitive replacement, but to investigate the consequences of such a formulation and identify the guarantees required for it to remain a sound basis for reasoning about OpenCL programs.
