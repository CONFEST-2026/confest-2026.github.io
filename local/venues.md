---
layout: default
title: Venues
subnav: local
herobackground: white
---
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

  <h2>Getting around</h2>

  <div class="grid">

    <!-- Walk -->
    <div class="card">
      <h3>Walking</h3>
      <p>
        The University of Liverpool campus (Central Teaching Hub) is within easy walking distance
        of the city centre, Lime Street Station, and many nearby hotels.
    A walk from the conference venue to the ferry terminal for the dinner on Thursday will not take more than 30 mins.
      </p>
    </div>

    <!-- Buses -->
    <div class="card">
      <h3>Buses</h3>
      <p>
        Local buses connect the city and campus. All buses accept contactless payment
        when boarding.
      </p>

      <div class="highlight">
        Flat fare: <strong>£2 per journey</strong>
      </div>
    </div>

    <!-- Bolt -->
    <div class="card">
      <h3>Bike & e-scooter</h3>
      <p>
        Bolt bikes and e-scooters are available across the city and provide a quick way
        to travel short distances between the centre and campus.
      </p>
      <p>
      <a href="https://bolt.eu/en/cities/liverpool/">Bolt in Liverpool</a>
      </p>
    </div>

  </div>
</section>


<section class="section">

  <h2>Main Venues</h2>


<div class="section">
  <div class="card">
    <div class="card-inner">
      <div class="card-content">
        <h3>Central Teaching Hub</h3>
        <p>
          Hosts:
          <ul>
            <li>All talks  (conferences and workshops)</li>
            <li>Lunches</li>
            <li>Coffee breaks</li>
          </ul>
        </p>
        <p>
          Map links: 
          <ul>
           <li> <a href="https://maps.app.goo.gl/X34H5Lh4uzt5umeE8">Google</a> </li>
           <li> <a href="https://w3w.co/race.invent.radio">///race.invent.radio</a></li>
         </ul>
        </p>
      </div>
      <div class="card-image">
        <img src="/assets/images/cth.jpg" alt="Central Teaching Hub">
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="card card--reverse">
    <div class="card-inner">
      <div class="card-content">
        <h3>Spaces at the Spine</h3>
        <p>
          Hosts: <a href="/local/social#welcome">Welcome reception (Tuesday)</a>
        </p>
        <p>
          Map links: 
          <ul>
           <li> <a href="https://maps.app.goo.gl/sdZkrk16mQULJjDq8">Google</a> </li>
           <li> <a href="https://w3w.co/spots.charmingly.posts">///spots.charmingly.posts</a></li>
         </ul>
        </p>
      </div>
      <div class="card-image">
        <img src="/assets/images/LiverpoolSpineView.jpg" alt="Spaces at the Spine">
      </div>
    </div>
  </div>
</div>


<div class="section">
  <div class="card">
    <div class="card-inner">
      <div class="card-content">
        <h3>Mersey Ferry Terminal</h3>
        <p>
          Hosts: <a href="/local/social#cruise">Dinner and Cruise (Thursday)</a>
        </p>
        <p>
          Boarding instructions for the Social Cruise will be made available closer to the event.
        </p>
        <p>
          Map links: 
          <ul>
           <li> <a href="https://maps.app.goo.gl/EXgMTqe4QBXJC6dv7">Google</a> </li>
           <li> <a href="https://w3w.co/voted.loved.shell">///voted.loved.shell</a></li>
         </ul>
        </p>
      </div>
      <div class="card-image">
        <img src="/assets/images/DazzleFerry.jpg" alt="Mersey Ferry">
      </div>
    </div>
  </div>
</div>


<div class="section">
  <div class="card card--reverse">
    <div class="card-inner">
      <div class="card-content">
        <h3>Sport Centre</h3>
        <p>
          Hosts: <a href="/local/social#football">Football (Friday)</a>
        </p>
        <p>
          Map links: 
          <ul>
           <li> <a href="https://maps.app.goo.gl/EpgdKanYLMNdeJR8A">Google</a> </li>
           <li> <a href="https://w3w.co/nests.data.relay">///nests.data.relay</a></li>
         </ul>
        </p>
      </div>
      <div class="card-image">
        <img src="/assets/images/SportCentre.jpg" alt="Sport Centre">
      </div>
    </div>
  </div>
</div>



<div class="section">
  <div class="card ">
    <div class="card-inner">
      <div class="card-content">
        <h3>On Campus Accommodation</h3>
        <p>
          Crown place accommodation is directly adjacent to the talks venue.
        </p>
        <p>
          For more information see <a href="/local/accommodation">our accommodation page</a>.
        </p>
        <p>
          Map links: 
          <ul>
           <li> <a href="https://maps.app.goo.gl/fubm6JiuvtEB8gmt8">Google</a> </li>
           <li> <a href="https://w3w.co/neat.flute.cars">///neat.flute.cars</a></li>
         </ul>
        </p>
      </div>
      <div class="card-image">
        <img src="/assets/images/crownplace.jpg" alt="Crown Place">
      </div>
    </div>
  </div>
</div>


</section>

