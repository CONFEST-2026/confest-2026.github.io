---
layout: default
subnav: concur
heroimage: /assets/images/liverpoolpetri-white-crop.png
herocontain: True
---

# CONCUR 2026


<section class="section">
<div class="grid23" >
<div class="" markdown=1>

The International Conference on Concurrency Theory (CONCUR) brings together researchers, developers, and students in order to advance the theory of concurrency, and promote its applications. 
The 2026 edition will be co-located with QEST+FORMATS, FMICS and a number of workshops under the joint name CONFEST 2026, which will take place **September 1-5, 2026** at the University of Liverpool, UK.
</div>
<div class="card" markdown=1 >
##### Important dates

- *Abstracts:*       20 April, 2026 (AoE)
- *Submissions:*     27 April, 2026 (AoE)
- *Rebuttal:*        1 -- 3 June, 2026 (AoE)
- *Notification:*    15 June, 2026 (AoE)
- *Camera Ready:*    29 June, 2026 (AoE)
- *Conference:*      1 -- 4 September, 2026
- *Workshops:*       5 September, 2026
</div>
</div>
</section>

---

<section markdown=1>
##### CONCUR Invited Speakers

{% assign speakers_concur = site.speakers | where: "conference", "CONCUR" %}
{% assign speakers_all = site.speakers | where: "conference", "all" %}

{% assign speakers = speakers_concur | concat: speakers_all 
  | where: "invited", true 
  | sort_natural: "last_name" %}


<div class="card-deck">
  {% for speaker in speakers %}
      {% assign website = speaker.links | first %}
    <div class="card">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}.webp" alt="{{ speaker.full_name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          {% if speaker.short_affiliation %}<p class="card-text small">{{ speaker.short_affiliation }}</p>{% endif %}
                  <a href="{{ speaker.url }}" class="stretched-link"></a>
                  <p class="small">
			          {% if speaker.conference == 'all' %}
			          Joint CONFEST Speaker
			          {% else %}
			          {{speaker.conference}} Speaker
			          {% endif %}
			      </p>
      </div>
    </div>
  {% endfor %}
</div>
</section>

---


##### Test-of-time Awards

This year, **two** papers will receive the CONCUR Test-of-Time Award:

- *Naoki Kobayashi*, [A New Type System for Deadlock-Free Processes, CONCUR'06](https://doi.org/10.1007/11817949_16)
- *Krishnendu Chatterjee, Thomas A. Henzinger, Nir Piterman*, [Strategy Logic, CONCUR'07](https://doi.org/10.1007/978-3-540-74407-8_5)


Congratulations to all authors!

<div class="divider"></div>

For questions please contact the PC chairs via <mailto:concur2026@easychair.org>.
