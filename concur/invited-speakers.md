---
layout: default
subnav: concur
---

## Invited Speakers CONFEST

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

<div class="card-deck">
  {% for speaker in speakers %}
     {% if speaker.name <= 5 %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          <a href="{{ website.absolute_url }}" class="stretched-link"></a>
      </div>
    </div>
      {% endif %}
  {% endfor %}
</div>

<br />

<div class="card-deck">
  {% for speaker in speakers %}
      {% if speaker.name > 5 %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          <a href="{{ website.absolute_url }}" class="stretched-link"></a>
      </div>
    </div>
      {% endif %}
  {% endfor %}
</div>

---

## Invited Speakers CONCUR

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

<div class="card-deck">
  {% for speaker in speakers %}
      {% if speaker.conference == "CONCUR" %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          <p class="card-text">{{ speaker.affiliation }}</p>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          <a href="{{ website.absolute_url }}" class="stretched-link"></a>
      </div>
    </div>
      {% endif %}
  {% endfor %}
</div>

---

## Joint CONFEST Invited Speakers 

---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

<div class="card-deck">
  {% for speaker in speakers %}
      {% if speaker.joint %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          <p class="card-text">{{ speaker.affiliation }}</p>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          {% if speaker.bio %}<p class="card-text">{{ speaker.bio }}</p>{% endif %}
          <a href="{{ website.absolute_url}}" class="stretched-link"></a>
      </div>
    </div>
      {% endif %}
  {% endfor %}
</div>

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.joint %}
  ---
  <div style="background-color:rgba(0, 0, 0, 0.0470588); text-align:left; vertical-align: middle; padding:40px 20px;">
    <h3>{{ speaker.first_name }} {{ speaker.last_name }}</h3>
    {{ speaker.affiliation }}<br/>      
    {% if speaker.atitle %}<h3>{{ speaker.atitle }}</h3>{% endif %}
    <p><a href="{{ "/assets/images/" | relative_url }}{{ speaker.img }}">
      <img src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.full_name: }}" style="float:right; padding:0 10px; width:30%">
    </a>
    {% if speaker.abstract %}{{ speaker.abstract }}{% endif %}
    <h3>Bio</h3>
    {% if speaker.bio %}{{ speaker.bio }}{% endif %}
    </p>
  </div>
    {% endif %}
{% endfor %}


