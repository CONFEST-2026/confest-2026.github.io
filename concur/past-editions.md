---
layout: default
subnav: concur
---

CONCUR 2026 in Liverpool is the 37th International Conference on Concurrency Theory. Previous editions include: 

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