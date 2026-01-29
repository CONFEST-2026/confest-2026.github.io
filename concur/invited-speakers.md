---
layout: default
subnav: concur
---

## Invited Speakers CONCUR

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

<div class="card-deck">
  {% for speaker in speakers %}
      {% if speaker.invited %}
      {% if speaker.conference == CONCUR %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          <p class="card-text">{{ speaker.affiliation }}</p>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          <a href="{{ website.href }}" class="stretched-link"></a>
      </div>
    </div>
      {% endif %}
      {% endif %}
  {% endfor %}
</div>




---

## Joint CONFEST Invited Speakers 

---

