---
name: "Probabilistic Model Checking via Families of Deterministic and Unambiguous Finite Automata"
speakers:
  - Christel Baier
  - Sascha Klüppelholz
  - Timm Spork
categories:
  - CONCUR
hide: false
---

Families of deterministic finite automata (FDFA) have been
introduced as a concise automaton model that characterizes
$\omega$-regular languages by processing their ultimately
period words. FDFA are known to enjoy many good properties
and can be exponentially more succinct than deterministic
$\omega$-automata with Rabin, Streett or parity acceptance.
This paper addresses two main questions: (1) Are FDFA
suitable for probabilistic model checking purposes? and (2)
Is it possible to obtain an even more compact
representation of $\omega$-regular languages by allowing
the components of an FDFA to be unambiguous instead of
deterministic? Question (1) is answered in the affirmative
by presenting the first polynomial-time algorithm for
computing the probability that a discrete-time Markov chain
satisfies an $\omega$-regular property represented as an
FDFA.
Question (2) is motivated by the fact that unambiguous
finite automata may require exponentially fewer states than
deterministic ones. This paper introduces a model of
families of unambiguous finite automata (FUFA) that
captures the class of $\omega$-regular languages. FUFA can
be exponentially more succinct than both FDFA and
unambiguous Büchi automata, and there is a
single-exponential translation from linear temporal logic
(LTL) to FUFA. This stands in contrast to a
double-exponential lower bound for the translation from LTL
to FDFA. Moreover, the polynomial-time probabilistic model
checking algorithm for discrete-time Markov chains against
FDFA-specifications is extended to the case where the
property is represented by an FUFA with a deterministic
leading automaton.
