---
title: Statistics
layout: default
map: true
---

<div class="statistics-page" markdown="1">

# Statistics

These statistics are based on self-reported data collected per participant at registration.
Participants were asked to name their affiliation, primary conference/workshop they attend, and (optionally) their origin and primary mode of travel.  
Anonymised data and scripts are available at <https://github.com/CONFEST-2026/statistics>.





{% assign statisticsRows = site.data.participants %}
{% assign participationRows = site.data.participation %}
{% assign n_local = 0 %}
{% assign n_plane = 0 %}
{% assign n_train = 0 %}
{% assign n_travel = 0 %}
{% assign co2_total = 0 %}
{% assign co2_values = "" | split: "" %}
{% assign travelling_values = "" | split: "" %}
{% assign train_distance = 0 %}
{% assign plane_distance = 0 %}
{% assign bus_distance = 0 %}
{% assign train_co2 = 0 %}
{% assign plane_co2 = 0 %}
{% assign bus_co2 = 0 %}
{% for r in statisticsRows %}
  {% assign plane_km = r.plane_km | plus: 0 %}
  {% assign train_km = r.train_km | plus: 0 %}
  {% assign bus_km = r.bus_km | plus: 0 %}
  {% assign co2 = r.total_co2_kg | plus: 0 %}
  {% assign co2_values = co2_values | push: co2 %}
  {% if co2 > 0 %}{% assign travelling_values = travelling_values | push: co2 %}{% endif %}
  {% assign train_distance = train_distance | plus: train_km %}
  {% assign plane_distance = plane_distance | plus: plane_km %}
  {% assign bus_distance = bus_distance | plus: bus_km %}
  {% assign train_co2 = train_co2 | plus: r.train_co2_kg %}
  {% assign plane_co2 = plane_co2 | plus: r.plane_co2_kg %}
  {% assign bus_co2 = bus_co2 | plus: r.bus_co2_kg %}
  {% if plane_km == 0 and train_km == 0 and bus_km == 0 %}
    {% assign n_local = n_local | plus: 1 %}
  {% elsif plane_km > 0 %}
    {% assign n_plane = n_plane | plus: 1 %}
  {% elsif train_km > 0 %}
    {% assign n_train = n_train | plus: 1 %}
  {% endif %}
  {% assign co2_total = co2_total | plus: co2 %}
  {% if co2 > 0 %}{% assign n_travel = n_travel | plus: 1 %}{% endif %}
{% endfor %}
{% assign co2_values = co2_values | sort %}
{% assign travelling_values = travelling_values | sort %}
{% assign co2_middle = co2_values.size | divided_by: 2 %}
{% assign travelling_middle = travelling_values.size | divided_by: 2 %}
{% assign co2_remainder = co2_values.size | modulo: 2 %}
{% assign travelling_remainder = travelling_values.size | modulo: 2 %}
{% if co2_values.size > 0 %}
  {% assign co2_median = co2_values[co2_middle] %}
  {% if co2_remainder == 0 %}
    {% assign co2_lower_middle = co2_middle | minus: 1 %}
    {% assign co2_median = co2_values[co2_lower_middle] | plus: co2_values[co2_middle] | divided_by: 2 %}
  {% endif %}
{% else %}{% assign co2_median = 0 %}{% endif %}
{% if travelling_values.size > 0 %}
  {% assign travelling_median = travelling_values[travelling_middle] %}
  {% if travelling_remainder == 0 %}
    {% assign travelling_lower_middle = travelling_middle | minus: 1 %}
    {% assign travelling_median = travelling_values[travelling_lower_middle] | plus: travelling_values[travelling_middle] | divided_by: 2 %}
  {% endif %}
{% else %}{% assign travelling_median = 0 %}{% endif %}
{% assign n_travelling = n_plane | plus: n_train %}
{% if n_travelling > 0 %}
  {% assign pct_plane = n_plane | times: 100.0 | divided_by: n_travelling | round %}
  {% assign pct_train = n_train | times: 100.0 | divided_by: n_travelling | round %}
{% else %}
  {% assign pct_plane = 0 %}
  {% assign pct_train = 0 %}
{% endif %}
{% assign distance_total = train_distance | plus: plane_distance | plus: bus_distance %}
{% assign concur_count = 0 %}
{% assign qf_count = 0 %}
{% assign fmics_count = 0 %}
{% assign workshops = 0 %}
{% assign concur_papers = 0 %}
{% assign qf_papers = 0 %}
{% assign fmics_papers = 0 %}
{% for event in participationRows %}
  {% if event.event == "CONCUR" %}
    {% assign concur_count = event.participants | plus: 0 %}
    {% assign concur_papers = event.papers | plus: 0 %}
  {% elsif event.event == "QEST+FORMATS" %}
    {% assign qf_count = event.participants | plus: 0 %}
    {% assign qf_papers = event.papers | plus: 0 %}
  {% elsif event.event == "FMICS" %}
    {% assign fmics_count = event.participants | plus: 0 %}
    {% assign fmics_papers = event.papers | plus: 0 %}
  {% else %}
    {% assign workshops = workshops | plus: event.participants %}
  {% endif %}
{% endfor %}
{% assign participation_total = concur_count | plus: qf_count | plus: fmics_count | plus: workshops %}
{% assign papers_total = concur_papers | plus: qf_papers | plus: fmics_papers %}
{% if participation_total > 0 %}
  {% assign concur_share = concur_count | times: 100.0 | divided_by: participation_total %}
  {% assign qf_share = qf_count | times: 100.0 | divided_by: participation_total %}
  {% assign fmics_share = fmics_count | times: 100.0 | divided_by: participation_total %}
  {% assign workshops_share = workshops | times: 100.0 | divided_by: participation_total %}
{% else %}
  {% assign concur_share = 0 %}{% assign qf_share = 0 %}{% assign fmics_share = 0 %}{% assign workshops_share = 0 %}
{% endif %}
{% assign pie_stop_1 = concur_share %}
{% assign pie_stop_2 = pie_stop_1 | plus: qf_share %}
{% assign pie_stop_3 = pie_stop_2 | plus: fmics_share %}
{% if papers_total > 0 %}
  {% assign concur_papers_share = concur_papers | times: 100.0 | divided_by: papers_total %}
  {% assign qf_papers_share = qf_papers | times: 100.0 | divided_by: papers_total %}
  {% assign fmics_papers_share = fmics_papers | times: 100.0 | divided_by: papers_total %}
{% else %}
  {% assign concur_papers_share = 0 %}{% assign qf_papers_share = 0 %}{% assign fmics_papers_share = 0 %}
{% endif %}
{% if statisticsRows %}
  {% assign country_groups = statisticsRows | group_by: "country_code" | sort: "size" | reverse %}
{% else %}
  {% assign country_groups = "" | split: "" %}
{% endif %}

## Conferences

Below are the relative sizes of conferences/workshops at CONFEST, using two proxies:
The first is based on participant's responses to which conference/workshop they primarily plan to attend.
  These do not overlap, so "Workshops" just counts the number of people who attend *only* the workshops.
The second (bar) chart shows the number of papers published in the proceedings of the three conferences.

<div class="row statistics-participation">
  <div class="col-lg-6">
    <div class="statistics-panel"><h3>Mainly attends</h3>
      <div class="statistics-card statistics-pie-layout">
        <div class="statistics-pie statistics-pie--events" style="--statistics-stop-1: {{ pie_stop_1 | round: 2 }}%; --statistics-stop-2: {{ pie_stop_2 | round: 2 }}%; --statistics-stop-3: {{ pie_stop_3 | round: 2 }}%" role="img" aria-label="CONCUR: {{ concur_count }} participants ({{ concur_share | round }}%). Q+F: {{ qf_count }} participants ({{ qf_share | round }}%). FMICS: {{ fmics_count }} participants ({{ fmics_share | round }}%). Workshops: {{ workshops }} participants ({{ workshops_share | round }}%)."></div>
        <p class="statistics-key"><span><i class="statistics-key__concur"></i>CONCUR: {{ concur_count }} ({{ concur_share | round }}%)</span><span><i class="statistics-key__qf"></i>Q+F: {{ qf_count }} ({{ qf_share | round }}%)</span><span><i class="statistics-key__fmics"></i>FMICS: {{ fmics_count }} ({{ fmics_share | round }}%)</span><span><i class="statistics-key__workshops"></i>Workshops: {{ workshops }} ({{ workshops_share | round }}%)</span></p>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="statistics-panel"><h3>Accepted papers</h3>
      <div class="statistics-card">
        <div class="statistics-vertical-chart" role="img" aria-label="Accepted papers by conference">
          <div class="statistics-vertical-bar"><span class="statistics-vertical-bar__value">{{ concur_papers }}</span><span class="statistics-vertical-bar__column statistics-vertical-bar__column--concur" style="--statistics-bar-height: {{ concur_papers_share | round: 2 }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">CONCUR</span></div>
          <div class="statistics-vertical-bar"><span class="statistics-vertical-bar__value">{{ qf_papers }}</span><span class="statistics-vertical-bar__column statistics-vertical-bar__column--qf" style="--statistics-bar-height: {{ qf_papers_share | round: 2 }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Q+F</span></div>
          <div class="statistics-vertical-bar"><span class="statistics-vertical-bar__value">{{ fmics_papers }}</span><span class="statistics-vertical-bar__column statistics-vertical-bar__column--fmics" style="--statistics-bar-height: {{ fmics_papers_share | round: 2 }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">FMICS</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

## Travel

<fieldset class="statistics-filters">
  <legend>Include events in the travel analysis</legend>
  <label><input type="checkbox" name="statistics-event" value="CONCUR" checked> CONCUR</label>
  <label><input type="checkbox" name="statistics-event" value="QEST+FORMATS" checked> QEST+FORMATS</label>
  <label><input type="checkbox" name="statistics-event" value="FMICS" checked> FMICS</label>
  <label><input type="checkbox" name="statistics-event" value="Workshops" checked> Workshops</label>
</fieldset>

### Where participants travelled from

<p id="statistics-origin-summary">We associated one country with each participant. This is derived from their stated travel origin, or, where not given, from their affiliation. The data contains
{{ n_local }} local participants from Liverpool; among the rest, {{ n_plane }}
({{ pct_plane }}%) travelled primarily by plane, {{ n_train }}
({{ pct_train }}%) primarily by train.</p>

On the map, each marker is a distinct origin city (excluding local participants, who did
not travel); size reflects the number of participants from that city, colour
reflects the fraction of those participants whose main travel mode was
flying (blue = all train/bus, red = all plane).

<div class="row statistics-origin-layout">
  <div class="col-lg-6">
    <div class="statistics-panel"><h3>Participants by country</h3>
      <div class="statistics-card"><p id="statistics-country-list" class="statistics-country-list">{% for country in country_groups %}{% assign country_share = country.size | times: 100.0 | divided_by: statisticsRows.size | round %}<span><img class="statistics-country-flag" src="https://flagcdn.com/24x18/{{ country.name | downcase }}.png" alt="" width="24" height="18">{{ country.name }} {{ country.size }} ({{ country_share }}%)</span>{% unless forloop.last %}, {% endunless %}{% endfor %}</p></div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="statistics-panel"><h3>Origin/Mode</h3><div class="statistics-card"><div id="origins-map" class="statistics-map" role="region" aria-label="Map of participant travel origins"></div></div></div>
  </div>
</div>

## CO2 emissions analysis

Estimates are based on each participant's travel origin (explicit or, where
missing, deduced from their affiliation) and travel mode (explicit or, where
missing, deduced as described below).

The estimated grand total is <strong id="statistics-co2-total">{{ co2_total | divided_by: 1000 | round }} t</strong>
of CO2e, averaging <strong id="statistics-co2-per-participant">{{ co2_total | divided_by: statisticsRows.size | round }} kg</strong>
per participant (median <strong id="statistics-co2-median">{{ co2_median | round }} kg</strong>) and
<strong id="statistics-co2-per-traveller">{{ co2_total | divided_by: n_travel | round }} kg</strong>
per non-local participant (median <strong id="statistics-co2-traveller-median">{{ travelling_median | round }} kg</strong>).


<div class="row statistics-analysis">
  <div class="col-lg-4">
    <div class="statistics-panel"><h3>Main mode of transport</h3><div class="statistics-card statistics-pie-layout"><div id="statistics-mode-pie" class="statistics-pie statistics-pie--modes" style="--statistics-train-share: {{ pct_train }}%" role="img" aria-label="Train: {{ n_train }} participants ({{ pct_train }}%). Plane: {{ n_plane }} participants ({{ pct_plane }}%)."></div><p class="statistics-key"><span><i class="statistics-key__train"></i><span id="statistics-train-key">Train: {{ n_train }} ({{ pct_train }}%)</span></span><span><i class="statistics-key__plane"></i><span id="statistics-plane-key">Plane: {{ n_plane }} ({{ pct_plane }}%)</span></span></p></div></div>
  </div>
  <div class="col-lg-4">
    <div class="statistics-panel"><h3>Total distance by mode</h3>
      <div class="statistics-card">
        {% if distance_total > 0 %}
          {% assign train_distance_share = train_distance | times: 100.0 | divided_by: distance_total | round %}
          {% assign plane_distance_share = plane_distance | times: 100.0 | divided_by: distance_total | round %}
          {% assign bus_distance_share = bus_distance | times: 100.0 | divided_by: distance_total | round %}
        {% else %}
          {% assign train_distance_share = 0 %}{% assign plane_distance_share = 0 %}{% assign bus_distance_share = 0 %}
        {% endif %}
        <div id="statistics-distance-chart" class="statistics-vertical-chart" role="img" aria-label="Total distance by travel mode">
          <div class="statistics-vertical-bar"><span id="statistics-train-distance-value" class="statistics-vertical-bar__value">{{ train_distance | round }} km ({{ train_distance_share }}%)</span><span id="statistics-train-distance-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--train" style="--statistics-bar-height: {{ train_distance_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Train</span></div>
          <div class="statistics-vertical-bar"><span id="statistics-plane-distance-value" class="statistics-vertical-bar__value">{{ plane_distance | round }} km ({{ plane_distance_share }}%)</span><span id="statistics-plane-distance-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--plane" style="--statistics-bar-height: {{ plane_distance_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Plane</span></div>
          <div class="statistics-vertical-bar"><span id="statistics-bus-distance-value" class="statistics-vertical-bar__value">{{ bus_distance | round }} km ({{ bus_distance_share }}%)</span><span id="statistics-bus-distance-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--bus" style="--statistics-bar-height: {{ bus_distance_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Bus</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="statistics-panel"><h3>Total CO2e by mode</h3>
      <div class="statistics-card">
        {% if co2_total > 0 %}
          {% assign train_co2_share = train_co2 | times: 100.0 | divided_by: co2_total | round %}
          {% assign plane_co2_share = plane_co2 | times: 100.0 | divided_by: co2_total | round %}
          {% assign bus_co2_share = bus_co2 | times: 100.0 | divided_by: co2_total | round %}
        {% else %}
          {% assign train_co2_share = 0 %}{% assign plane_co2_share = 0 %}{% assign bus_co2_share = 0 %}
        {% endif %}
        <div id="statistics-co2-chart" class="statistics-vertical-chart" role="img" aria-label="Total CO2 emissions by travel mode">
          <div class="statistics-vertical-bar"><span id="statistics-train-co2-value" class="statistics-vertical-bar__value">{{ train_co2 | round }} kg ({{ train_co2_share }}%)</span><span id="statistics-train-co2-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--train" style="--statistics-bar-height: {{ train_co2_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Train</span></div>
          <div class="statistics-vertical-bar"><span id="statistics-plane-co2-value" class="statistics-vertical-bar__value">{{ plane_co2 | round }} kg ({{ plane_co2_share }}%)</span><span id="statistics-plane-co2-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--plane" style="--statistics-bar-height: {{ plane_co2_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Plane</span></div>
          <div class="statistics-vertical-bar"><span id="statistics-bus-co2-value" class="statistics-vertical-bar__value">{{ bus_co2 | round }} kg ({{ bus_co2_share }}%)</span><span id="statistics-bus-co2-bar" class="statistics-vertical-bar__column statistics-vertical-bar__column--bus" style="--statistics-bar-height: {{ bus_co2_share }}%" aria-hidden="true"></span><span class="statistics-vertical-bar__label">Bus</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row statistics-analysis">
  <div class="col-lg-12">
    <div class="statistics-panel"><h3>CO2 emissions per participant</h3>
      <div class="statistics-card">
        <p>Each bar is one participant's estimated round-trip emissions, sorted from lowest to highest.</p>
        <p class="statistics-key"><span><i class="statistics-key__local"></i>Local</span><span><i class="statistics-key__train"></i>Train</span><span><i class="statistics-key__plane"></i>Plane</span></p>
        <div id="statistics-co2-histogram" class="statistics-histogram" role="img" aria-label="Histogram of CO2 emissions per participant">
          <p>Enable JavaScript to view the histogram.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  window.statisticsParticipants = {{ statisticsRows | jsonify }};
</script>
<script>{% include js/statistics-map.js %}</script>

## Methodology

- Distances and emissions are round-trip (out+back).
- Travel-mode inference (fallback only, applied when not explicitly stated):
  train for participants from the UK or France, plane otherwise.
- Train routing: UK-origin journeys go directly to Liverpool, using exact
  rail route mileages (from the [RailMiles Mileage
  Engine](https://my.railmiles.me/mileage-engine/)) hard-coded for every
  British origin in the data — no London detour. Continental European rail
  travel is routed via whichever Eurostar hub (Amsterdam, Rotterdam, or
  Paris) is closest to the origin, then via London to Liverpool; the
  London–Liverpool and hub–London legs use fixed, hard-coded real rail
  distances, while the origin–hub leg is computed from the origin's
  coordinates.
- Long-haul origins (e.g. Australia, USA) are modelled as flying to London
  Heathrow, then continuing by train to Liverpool.
- Other flying participants are modelled as flying to Manchester, followed
  by a short, fixed round-trip bus transfer to Liverpool.
- Detour factors: any distance computed from coordinates is a great-circle
  ("as the crow flies") distance, which understates the real journey. Flight
  distances are therefore multiplied by **1.10** to account for airway
  routing, holding and taxiing, and rail distances of unknown exact length by
  **1.20**, calibrated against the exact UK route mileages above (whose
  rail/great-circle ratios range from 1.10 for London to 1.41 for Edinburgh,
  median 1.16).
- Emission factors:
  - Train: 0.041 kgCO2e/pkm.
  - Plane: distance-banded, following the labos1point5/ADEME methodology
    (also used by comparable academic conference-footprint studies) to
    reflect that short-haul flights are less fuel-efficient per km than
    long-haul cruise: 0.258 kg/pkm up to 1000 km, 0.187 kg/pkm between 1000
    and 3500 km, 0.152 kg/pkm above 3500 km (all one-way leg distances).
  - Bus: 0.028 kgCO2e/pkm.

## Leg-based data for cross-conference comparison

[`participants.csv`](https://github.com/CONFEST-2026/statistics/blob/main/participants.csv)
contains one round-trip estimate per participant.  
For cross-conference comparison,
[`trips_by_leg.csv`](https://github.com/CONFEST-2026/statistics/blob/main/trips_by_leg.csv)
reshapes those estimates into one row per travel leg (mode and distance), with
two identical legs for each modelled round trip. This format is directly
comparable with [the datasets and scripts for HIGHLIGHTS](https://a3nm.net/git/conference_footprint/),
that record independent arrival and departure legs.


</div>
