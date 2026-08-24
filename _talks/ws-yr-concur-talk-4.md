---
name: "Designing and Verifying a Post-Quantum Protocol using ProVerif"
speakers:
  - Robert-William Evans
  - Florian Kammueller
categories:
  - YR-CONCUR
hide: false
---

Verifying cryptographic protocols provides mathematical assurance of their correctness. It enables system designers and engineers to place trust in their security and privacy guarantees prior to deployment and mass adoption. Given that security and privacy vulnerabilities are often expensive or impossible to remedy once systems are operational, formal verification is widely regarded as a prudent and necessary step in protocol development. This paper explores the integration of CoverCrypt, an ETSI-standardised post-quantum attribute-based encryption (ABE) scheme, into a post-quantum secure protocol, by combining CoverCrypt with post-quantum secure authentication and key-encapsulation. The protocol is designed to provide quantum-safe protection for privacy-critical data at rest while maintaining practical usability in enterprise environments. The proposed system targets cloud-based document storage and processing, where centralized policy enforcement, fine-grained access control for privacy, and long-term confidentiality are essential. Documents remain encrypted while stored yet can be accessed by authorized users. To assess the security and privacy of the protocol, several key properties are formally verified using ProVerif, a cryptographic model checker. Furthermore, a prototype implementation was developed using modern web technologies and existing cloud storage systems to demonstrate the feasibility of the proposed approach.
