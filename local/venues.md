---
layout: default
title: Venues
redirect_to: /local/
subnav: local
herobackground: white
---
{% comment %} 
<div>
<script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css">

<script>
   const map = new ol.Map({
    target: 'heroimage',
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-2.96301, 53.40399]),
      zoom: 15
    })
  });

  const markerSource = new ol.source.Vector();
  const markerLayer = new ol.layer.Vector({ source: markerSource });
  map.addLayer(markerLayer);

  /**
   * Add a building marker with a label
   * @param {number} lon - longitude
   * @param {number} lat - latitude
   * @param {string} name - building name
   * @param {string} color - marker color
   * @param {string} anchor - text anchor: 'n','s','e','w','ne','nw','se','sw'
   */
  function addBuilding(lon, lat, name, color='red', anchor='n') {
    const feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
      name: name
    });

    // offset map for text based on anchor
    let offset = [0, -15]; // default north
    switch(anchor.toLowerCase()) {
      case 'n': offset = [0, -15]; break;
      case 's': offset = [0, 15]; break;
      case 'e': offset = [15, 0]; break;
      case 'w': offset = [-15, 0]; break;
      case 'ne': offset = [15, -15]; break;
      case 'nw': offset = [-15, -15]; break;
      case 'se': offset = [15, 15]; break;
      case 'sw': offset = [-15, 15]; break;
    }

    // set style with circle + text
    feature.setStyle(new ol.style.Style({
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({ color: color }),
        stroke: new ol.style.Stroke({ color: 'white', width: 2 })
      }),
      text: new ol.style.Text({
        text: name,
        offsetX: offset[0],
        offsetY: offset[1],
        font: 'bold 14px sans-serif',
        fill: new ol.style.Fill({ color: 'black' }),
        stroke: new ol.style.Stroke({ color: 'white', width: 5 })
      })
    }));

    markerSource.addFeature(feature);
  }

  // Your buildings
  addBuilding(-2.96301, 53.40499, "Talks", 'red', 's');
  addBuilding(-2.960834, 53.40700, "Hotel", 'blue', 'n');
  addBuilding(-2.964978,53.405762, "Pub","blue",'s');
  addBuilding(-2.966220,53.40399, "Football","red",'s');
  addBuilding(-2.969002,53.404861,"Cathedral","green","s");
  addBuilding(-2.97313, 53.39743,"Cathedral","green","s");
  addBuilding(-2.97768,53.40759,"Liverpool Lime Street \n(Main station)","green","s");
  addBuilding(-2.960834, 53.406564, "Reception", "red","s");
  addBuilding(-2.962662,53.405973, "Halls", "blue","s");
  addBuilding(-2.997151,53.404575, "Ferry Terminal", "red","ne");
</script>

</div>



<section class="section">

  <h2>Main Venues</h2>
 
<div class="card-deck collapsed-card-deck">

  <div class="card">
    <img class="card-img-top" src="/assets/images/cth.webp" alt="Central Teaching Hub">
    <div class="card-body">
      <h5 class="card-title">Central Teaching Hub</h5>
      <p class="card-text">
        Hosts:
        <ul>
          <li><a href="/program/">All conference and workshop talks</a></li>
          <li>Lunch and coffee breaks</li>
        </ul>
      </p>
      <p class="card-text venue-links"> Find: 
        <a href="https://maps.app.goo.gl/X34H5Lh4uzt5umeE8" title="Open in Google Maps" aria-label="Open in Google Maps"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://w3w.co/race.invent.radio" title="what3words: ///race.invent.radio" aria-label="what3words: race invent radio"><svg class="w3w-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20L10 4M13 20L16 4M19 20L22 4"/></svg></a>
      </p>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src="/assets/images/spineoutside.webp" alt="Spaces at the Spine">
    <div class="card-body">
      <h5 class="card-title">Spaces at the Spine</h5>
      <p class="card-text">
        Hosts: <a href="/local/social#welcome">Welcome reception (Tuesday)</a>
      </p>
      <p class="card-text venue-links"> Find: 
        <a href="https://maps.app.goo.gl/sdZkrk16mQULJjDq8" title="Open in Google Maps" aria-label="Open in Google Maps"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://w3w.co/spots.charmingly.posts" title="what3words: ///spots.charmingly.posts" aria-label="what3words: spots charmingly posts"><svg class="w3w-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20L10 4M13 20L16 4M19 20L22 4"/></svg></a>
      </p>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src="/assets/images/DazzleFerry.jpg" alt="Mersey Ferry">
    <div class="card-body">
      <h5 class="card-title">Mersey Ferry Terminal</h5>
      <p class="card-text">
        Hosts: <a href="/local/social#cruise">Dinner and Cruise (Thursday)</a>
      </p>
      <p class="card-text">
        Boarding instructions can be found on the <a href="/local/social">social activities</a> page.
      </p>
      <p class="card-text venue-links"> Find: 
        <a href="https://maps.app.goo.gl/EXgMTqe4QBXJC6dv7" title="Open in Google Maps" aria-label="Open in Google Maps"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://w3w.co/voted.loved.shell" title="what3words: ///voted.loved.shell" aria-label="what3words: voted loved shell"><svg class="w3w-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20L10 4M13 20L16 4M19 20L22 4"/></svg></a>
      </p>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src="/assets/images/SportCentre.webp" alt="Sport Centre">
    <div class="card-body">
      <h5 class="card-title">Sport Centre</h5>
      <p class="card-text">
        Hosts: <a href="/local/social#football">Football (Friday)</a>
      </p>
      <p class="card-text venue-links"> Find: 
        <a href="https://maps.app.goo.gl/EpgdKanYLMNdeJR8A" title="Open in Google Maps" aria-label="Open in Google Maps"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://w3w.co/nests.data.relay" title="what3words: ///nests.data.relay" aria-label="what3words: nests data relay"><svg class="w3w-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20L10 4M13 20L16 4M19 20L22 4"/></svg></a>
      </p>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src="/assets/images/crownplace.webp" alt="Crown Place">
    <div class="card-body">
      <h5 class="card-title">On-Campus Accommodation</h5>
      <p class="card-text">
        For more information see <a href="/local/accommodation">our accommodation page</a>.
      </p>
      <p class="card-text venue-links"> Find: 
        <a href="https://maps.app.goo.gl/fubm6JiuvtEB8gmt8" title="Open in Google Maps" aria-label="Open in Google Maps"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://w3w.co/neat.flute.cars" title="what3words: ///neat.flute.cars" aria-label="what3words: neat flute cars"><svg class="w3w-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20L10 4M13 20L16 4M19 20L22 4"/></svg></a>
      </p>
    </div>
  </div>

</div>

</section>
{% endcomment %} 