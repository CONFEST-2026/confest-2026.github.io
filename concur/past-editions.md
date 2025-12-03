---
layout: default
subnav: concur
---

# Past Editions

CONCUR 2026 in Liverpool will be the 37th International Conference on Concurrency Theory.
The full list of previous edition is below.

<ul>
    {% for edition in site.data.previous-concur.past_concur %}
        <li>
        {% if edition.absolute_url %}
        <a href="{{ edition.absolute_url }}">{{ edition.name }}</a>
        {% else %}
            {{ edition.name }}
        {%endif%}
        </li>
    {% endfor %}
</ul>
