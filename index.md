---
layout: default
heroimage: /assets/images/liverpool-front-white.webp
---
<br />
<!-- <img src="/assets/images/vict.png" width="1100"> -->

# CONFEST 2026

CONFEST brings together researchers, developers, and students in computer science, in order to advance the theory of concurrency, the study of stochastic and timed systems, and the application of formal methods to industrial systems. 

This umbrella event consists of three main conferences [CONCUR](concur), [FMICS](fmics) and [QEST+FORMATS](https://www.qest-formats.org/), and affiliated workshops.
The 2026 edition will take place on the main campus of the University of Liverpool, on **September 1-5, 2026**.  

---
### Main Conferences

**[CONCUR 2026](https://confest-2026.github.io/concur), the 37th International Conference on *Concurrency Theory***

**[FMICS 2026](https://confest-2026.github.io/fmics), the 31th International Conference on *Formal Methods for Industrial Critical Systems***

**[QEST+FORMATS 2026](https://www.qest-formats.org/), the joint International Conference on *Quantitative Evaluation of SysTems and on Formal Modeling and Analysis of Timed Systems***

---

##### Schedule


<table class="overallschedule" >
<thead align="center">
<tr>
<td class="weekday"><span class="abbr">Tue</span><span class="full">Tuesday</span></td>
<td class="weekday"><span class="abbr">Wed</span><span class="full">Wednesday</span></td>
<td class="weekday"><span class="abbr">Thu</span><span class="full">Thursday</span></td>
<td class="weekday"><span class="abbr">Fri</span><span class="full">Friday</span></td>
<td class="weekday"><span class="abbr">Sat</span><span class="full">Saturday</span></td>
</tr>  
</thead>
<tbody>
<tr>
  <td colspan="4" class="actual concur">CONCUR</td>
  <td rowspan="4" class="actual workshops">Workshops</td>
  
</tr>    
<tr>
  <td></td>
  <td colspan="3" class="actual qestformats">QEST+FORMATS</td>
</tr>    
<tr>
  <td></td>
  <td colspan="3" class="actual fmics">FMICS</td>
</tr>    
<tr>
  <td  class="actual events">Evening Reception</td>
  <td></td>
  <td  class="actual events">Social Activity</td>
  <td></td>
</tr>
</tbody>  
</table>

---

##### Invited Speakers CONFEST

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

<div class="card-deck">
  {% for speaker in speakers %}
      {% assign website = speaker.links | first %}
    <div class="card" style="width:200px">
      <img class="card-img-top" 
      src="{{ "/assets/images/" | relative_url }}{{ speaker.img }}" alt="{{ speaker.name }}">
      <div class="card-body">
          <h5 class="card-title">{{ speaker.first_name }} {{ speaker.last_name }}</h5>
          {% if speaker.extra %}<p class="card-text">{{ speaker.extra }}</p>{% endif %}
          {% if speaker.last_name != 'Larsen' %}
                  <a href="/speakers/{{ speaker.first_name }}.{{ speaker.last_name }}" class="stretched-link"></a>
          {% else %}
                  <a href="/speakers/Kim.G.Larsen" class="stretched-link"></a>
          {% endif %}
          {% if speaker.conference == 'all' %}
          Joint
          {% else %}
          {{speaker.conference}}
          {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

---

##### Organisation

CONFEST 2026 is organised by the School of Computer Science and Informatics at the University of Liverpool.

[Daniel Hausmann](https://www.csc.liv.ac.uk/~hausmann/) (publicity, [CONFEST Advocate](/local/code-of-conduct))  
[David Purser](https://www.davidpurser.net) (co-chair)  
[Patrick Totzke](https://www.csc.liv.ac.uk/~patrick/) (co-chair)  
[Shufang Zhu](https://shufang-zhu.github.io) (workshops)  

---

##### News

{% include news.html %}


##### Sponsors

The following sponsors have confirmed their support for the event.

{% include sponsors.html %}

