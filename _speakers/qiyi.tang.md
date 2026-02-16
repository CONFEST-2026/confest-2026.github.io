---
name: 8
full_name: Qiyi Tang
first_name: Qiyi
last_name: Tang
img: invited-concur-qtA.jpg
affiliation: University of Liverpool, UK
invited: true
joint: false
conference: CONCUR
hide: false
bio: Qiyi is a lecturer in the School of Computer Science  and Informatics (CS&I) at the University of Liverpool. Prior to that, she worked as a postdoctoral researcher in different places. She was a research associate at the University of Liverpool, supervised by Prof. Xiaowei Huang and Prof. Sven Schewe. She was working on algorithmic comparison of probabilistic systems, with Prof. Stefan Kiefer at the University of Oxford and the compiler bug impact project at Imperial College London.  Qiyi was also a lecturer at Balliol College, the University of Oxford for the 2020-2021 academic year. Her research interests include software verification, probabilistic models and automata theory. She received her Ph.D. in 2018 from York University, Toronto under the supervision of Prof. Franck van Breugel. She received the Governor General's Academic Gold Medal, Canada's most prestigious academic award for students. She has obtained her Master's degree in Computer Science at Oxford University with Distinction in 2013. 
links:
  - name: Website
    absolute_url: https://sites.google.com/view/qiyitang/
---

{% assign speakers = site.speakers | sort_natural: 'last_name' %}

{% for speaker in speakers %}
    {% if speaker.last_name == "Tang" %}
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
