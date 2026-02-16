---
name: 4
full_name: Julia Badger
first_name: Julia
last_name: Badger
img: invited-fmics-jbA.jpg
affiliation: NASA Johnson Space Center, USA
invited: true
joint: false
conference: FMICS
hide: false
atitle: Application of Formal Methods to Design and Verification of Autonomous Space Systems
abstract: As NASA's Artemis Program accelerates towards the Moon, the consideration of technologies needed for Martian exploration remains at the forefront. One significant technology gap is the ability to autonomously control complex, safety-critical, integrated spacecraft systems across the operational range of the vehicle and mission. The Gateway lunar space station has focused on autonomous spacecraft control as a major operational goal with the addition of a new software distributed hierarchical control architecture. This novel functionality depends strongly on correct behavior at every level of the architecture, and verification of this new system will require special consideration. Typical spacecraft testing campaigns rely on using similar hardware and software to run through mission use cases and limited edge cases. Given the distributed and autonomous nature of the Gateway software control system, alternative approaches are being explored to buy down risk in design, verification, and operation. For example, assume guarantee contracts were built into the design and will be used as part of spacecraft verification. Likewise, model checking will be leveraged during the operation of the autonomous spacecraft to understand spacecraft behavior given ground direction and commands. This talk will discuss the design, architecture, and plans for formal methods analysis of the Gateway.
links:
  - name: Website
    absolute_url: https://www.nasa.gov/johnson/
---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.last_name == "Badger" %}
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
