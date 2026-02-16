---
name: 2
full_name: Ichiro Hasuo
first_name: Ichiro
last_name: Hasuo
img: invited-IHA.jpg
affiliation: Professor at the National Institute of Informatics (NII), Tokyo, Japan
invited: true
joint: true
conference: all
hide: false
bio: Ichiro Hasuo, Ph.D., is a Professor at National Institute of Informatics (NII), Tokyo, Japan. He is, at the same time, a founder and Chief Scientific Officer of the university startup Imiron Co., Ltd. He received PhD in computer science (cum laude) from Radboud University Nijmegen in 2008, supervized by Prof. Dr. Bart Jacobs. Before the current positions, he held positions at RIMS, Kyoto University, and Dept. Computer Science, the University of Tokyo. He is a recipient of multiple paper awards (CONCUR 2012, ICECCS 2018, CAV 2023, ICTAC 2024, ATVA 2025), and prestigious research grants (JST ERATO and ASPIRE). His interests are in the theory and practice of software, in particular, in categorical foundations of formal verification, and model-less light-weight formal methods for cyber-physical systems.
links:
  - name: Website
    absolute_url: https://group-mmm.org/~ichiro/
---

  <div style="background-color:rgba(0, 0, 0, 0.0470588); text-align:left; vertical-align: middle; padding:40px 20px;">
    <h3>{{ first_name }} {{ last_name }}</h3>
    {{ affiliation }}<br/>      
    {% if atitle %}<h3>{{ atitle }}</h3>{% endif %}
    <p><a href="{{ "/assets/images/" | relative_url }}{{ img }}">
      <img src="{{ "/assets/images/" | relative_url }}{{ img }}" alt="{{ full_name: }}" style="float:right; padding:0 10px; width:30%">
    </a>
    {% if abstract %}{{ abstract }}{% endif %}
    <h3>Bio</h3>
    {% if bio %}{{ bio }}{% endif %}
    </p>
  </div>
