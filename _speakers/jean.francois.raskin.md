---
name: 7
full_name: Jean-François Raskin
first_name: Jean-François
last_name: Raskin
img: invited-concur-jrA.jpg
affiliation: Université Libre de Bruxelles, Belgium
invited: true
joint: false
conference: CONCUR
hide: false
bio: Jean-François Raskin is a professor of computer science at the Université libre de Bruxelles (ULB) working on formal methods for the verification and synthesis of reactive systems. His research focuses on graph games—including quantitative and imperfect-information models—and their applications to controller synthesis. More recently, he has studied multi-player games and their applications to rational synthesis and verification. He has also contributed to approaches that combine reactive synthesis with learning techniques.
links:
  - name: Website
    absolute_url: https://verif.ulb.ac.be/jfr/
---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.last_name == "Raskin" %}
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
