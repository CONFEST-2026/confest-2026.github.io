(function () {
  var originsGeoJSON = {{ site.data.travel_origins | jsonify }};

  function setupOriginsMap() {
    var container = document.getElementById('origins-map');
    if (!container || typeof L === 'undefined' || !originsGeoJSON) { return; }

    var map = L.map(container).setView([50, 10], 4);
    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

    L.geoJSON(originsGeoJSON, {
      pointToLayer: function (feature, latlng) {
        var p = feature.properties;
        return L.circleMarker(latlng, {
          radius: 4 + 3 * Math.sqrt(p.n_participants), color: p.color,
          weight: 1, fillColor: p.color, fillOpacity: 0.6
        });
      },
      onEachFeature: function (feature, marker) {
        var p = feature.properties;
        var popup = document.createElement('div');
        var title = document.createElement('strong');
        title.textContent = p.city + ' (' + p.country_code + ')';
        popup.appendChild(title);
        popup.appendChild(document.createElement('br'));
        popup.appendChild(document.createTextNode(p.n_participants + ' participant(s)'));
        popup.appendChild(document.createElement('br'));
        popup.appendChild(document.createTextNode('Plane: ' + p.n_plane + ', train: ' + p.n_train));
        marker.bindPopup(popup);
      }
    }).addTo(map);
  }

  window.addEventListener('load', setupOriginsMap);
}());
