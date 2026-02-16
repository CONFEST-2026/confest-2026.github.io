---
name: 6
full_name: Jade Alglave
first_name: Jade
last_name: Alglave
img: placeholderA.png
affiliation: University College London, UK
invited: true
joint: false
conference: CONCUR
hide: false
links:
  - name: Website
    absolute_url: http://www0.cs.ucl.ac.uk/staff/j.alglave/
---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.last_name == "Algave" %}
  ---
  <div style="background-color:rgba(0, 0, 0, 0.0470588); text-align:left; vertical-align: middle; padding:40px 20px;">
    <h3>{{ speaker.first_name }} {{ speaker.last_name }}</h3>
    {{ speaker.affiliation }}<br /> <br />      
    {% if speaker.atitle %}<h3>{{ speaker.atitle }}</h3>{% endif %}
    <p><a href="{{ "/assets/images/" | relative_url }}{{ speaker.img }}">
      <img src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.full_name: }}" style="float:right; padding:0 10px; width:30%">
    </a>
    {% if speaker.abstract %}{{ speaker.abstract }}{% endif %}
    {% if speaker.bio %}<h3>Bio</h3> {{ speaker.bio }}{% endif %}
    </p>
  </div>
    {% endif %}
{% endfor %}
