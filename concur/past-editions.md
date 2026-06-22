---
title: Past Editions
layout: default
subnav: concur
---

# {{page.title}}

CONCUR 2026 in Liverpool will be the 37th International Conference on Concurrency Theory.
The full list of previous editions is below.

<ol class="past-editions__timeline">
    {% for edition in site.data.previous-concur.past_concur %}
        {% include partials/past-edition.html edition=edition %}
    {% endfor %}
</ol>
