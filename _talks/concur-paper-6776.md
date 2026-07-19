---
name: "A Factorization Theorem for Forest Algebras"
speakers:
  - Shaull Almagor
  - Michaël Cadilhac
  - Asaf Shoham
categories:
  - CONCUR
hide: false
---

Simon’s factorization theorem is a celebrated tool in
algebraic automata theory, providing bounded-depth
decompositions of words with respect to morphisms into
finite semigroups.

We develop an analogue of Simon's theorem for
\emph{forests} in the setting of forest algebras. In
contrast with words, this presents a basic difficulty:
recursively factoring a forest requires keeping track of
where each subforest ``fits''. This difficulty ripples
throughout the proof, and we overcome it by augmenting the
free forest algebra and by developing a framework that
supports recursive factorization of forests, along with its
semantic implications.

Our main result identifies a new semantic restriction on
morphisms (called $\mr$-alignment) which intuitively
ensures that different ways of cutting a forest remain
compatible (in a certain sense) at the semigroup level.
Under this condition, we prove that every morphism admits
decompositions of bounded depth.
We also prove that without this restriction, there are
morphisms for which no bounded-depth decomposition exists
(under our notion of decomposition).
