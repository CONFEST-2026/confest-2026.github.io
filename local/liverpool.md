---
layout: default
title: Location
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
  addBuilding(-2.969002,53.404861,"Cathedral","green","s");
  addBuilding(-2.97313, 53.39743,"Cathedral","green","s");
  addBuilding(-2.97768,53.40759,"Liverpool Lime Street \n(Main station)","green","s");
  addBuilding(-2.960834, 53.406564, "Reception", "red","s");
  addBuilding(-2.962662,53.405973, "Halls", "blue","s");
  addBuilding(-2.997151,53.404575, "Social Activity", "red","ne");
</script>

</div>


### Getting around

The conference will be held on the campus of the University of Liverpool (in the [Central Teaching Hub](https://www.liverpool.ac.uk/central-teaching-hub/)). The campus is easily reached from the city centre, the station and many hotels on foot (and also by bus). 

### Where to stay

Suggested accommodation will be provided in due course.