---
name: "MightyPPL: Towards model checking MTL"
speakers:
  - Hsi-Ming Ho
  - S Krishna
  - Khushraj Madnani
  - Rupak Majumdar
  - Paritosh Pandya
categories:
  - Q+F
hide: false
---

While the theoretical foundation for model checking timed systems against Metric Interval Temporal Logic (MITL) specifications was established in the early 1990s, the first practical tool implementa- tion (MightyL) did not emerge until 2017. Recently, there has been a resurgence of interest to accommodate more expressive logical operators, including Pnueli modalities and limited support for punctual (singular) intervals. The tool MightyPPL achieves this.

In this paper, we introduce an updated version of the MightyPPL tool. Most notably, this version allows, for the first time, the model checking of Metric Temporal Logic (MTL) properties such as G(p → F{=5}q). We discuss the tool’s underlying design and implementation, and we provide a performance evaluation against the recently proposed tool Tempora using diverse satisfiability and model checking benchmarks.
