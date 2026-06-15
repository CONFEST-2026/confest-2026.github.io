---
title: Accepted Papers
layout: default
subnav: concur
---

# {{page.title}}

<ul>
    {% for paper in site.data.concur-accepted-papers %}
        <li>
            <strong>{{ paper.Authors }}</strong>. {{ paper.Title }}
        </li>
    {% endfor %}
</ul>
