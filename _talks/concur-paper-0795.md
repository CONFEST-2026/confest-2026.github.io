---
name: "Prophecy-Based Automated Verification of Message-Passing Programs"
speakers:
  - Takashi Nagatomi
  - Musashi Katsura
  - Naoki Kobayashi
  - Yusuke Matsushita
  - Ken Sakayori
categories:
  - CONCUR
hide: false
---

We propose a fully automated method for verifying
  functional correctness of message-passing concurrent
  programs by reducing verification problems to constrained
  Horn clause (CHC) solving. Inspired by RustHorn’s
  prophecy-based technique, we represent each sender
  channel by a list of values to be sent over the channel
  in the future, which enables modular encoding of sender
  and receiver threads in CHCs. To capture causal
  dependencies between different channels, we further
  attach timestamps to messages. We prove that the
  resulting reduction is sound and complete: a program is
  free from assertion failures if and only if the
  corresponding system of CHCs is satisfiable. We have also
  implemented a prototype verifier for Rust-like programs
  and experimentally confirmed the effectiveness of the
  approach.
