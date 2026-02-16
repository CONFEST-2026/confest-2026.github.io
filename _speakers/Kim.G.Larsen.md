---
name: 10
full_name: Kim G. Larsen
first_name: Kim G.
last_name: Larsen
img: placeholderA.png
affiliation: Aalborg University, Denmark
invited: true
joint: false
conference: QEST
hide: false
links:
  - name: Website
    absolute_url: https://kgl.cs.aau.dk/
---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.last_name == "Larsen" %}
  ---
  <div style="background-color:rgba(0, 0, 0, 0.0470588); text-align:left; vertical-align: middle; padding:40px 20px;">
    <h3>{{ speaker.first_name }} {{ speaker.last_name }}</h3>
    {{ speaker.affiliation }}<br/>      
    <p>
    {% if speaker.atitle %}<h3>{{ speaker.atitle }}</h3>{% endif %}
    {% if speaker.abstract %}{{ speaker.abstract }}{% endif %}
    </p>
    {% if speaker.bio %}<h3>Bio</h3> {{ speaker.bio }}{% endif %}
  </div>
    {% endif %}
{% endfor %}
