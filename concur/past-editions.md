---
layout: default
subnav: concur
---

CONCUR 2026 in Liverpool is the 37th International Conference on Concurrency Theory. Previous editions include: 

<ul>
    {% for edition in site.data.previous-concur.past_concur %}
        <li><a href="{{ edition.absolute_url }}">{{ edition.name }}</a></li>
    {% endfor %}
</ul>