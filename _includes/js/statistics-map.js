(function () {
  var originsGeoJSON = {{ site.data.travel_origins | jsonify }};
  var participants = window.statisticsParticipants || [];
  var map;
  var mapLayer;

  function number(row, key) {
    return Number(row[key]) || 0;
  }

  function selectedEvents() {
    return Array.prototype.map.call(
      document.querySelectorAll('input[name="statistics-event"]:checked'),
      function (input) { return input.value; }
    );
  }

  function percent(value, total) {
    return total ? Math.round(value * 100 / total) : 0;
  }

  function median(values) {
    if (!values.length) { return 0; }
    var sorted = values.slice().sort(function (a, b) { return a - b; });
    var middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function updateText(id, value) {
    var element = document.getElementById(id);
    if (element) { element.textContent = value; }
  }

  function updateBar(valueId, barId, value, total, unit) {
    updateText(valueId, Math.round(value) + ' ' + unit + ' (' + percent(value, total) + '%)');
    var bar = document.getElementById(barId);
    if (bar) { bar.style.setProperty('--statistics-bar-height', percent(value, total) + '%'); }
  }

  function summarize(rows) {
    var result = {
      local: 0, plane: 0, train: 0, travel: 0,
      trainDistance: 0, planeDistance: 0, busDistance: 0,
      trainCo2: 0, planeCo2: 0, busCo2: 0, totalCo2: 0
    };
    rows.forEach(function (row) {
      var trainKm = number(row, 'train_km');
      var planeKm = number(row, 'plane_km');
      var busKm = number(row, 'bus_km');
      var co2 = number(row, 'total_co2_kg');
      result.trainDistance += trainKm;
      result.planeDistance += planeKm;
      result.busDistance += busKm;
      result.trainCo2 += number(row, 'train_co2_kg');
      result.planeCo2 += number(row, 'plane_co2_kg');
      result.busCo2 += number(row, 'bus_co2_kg');
      result.totalCo2 += co2;
      if (!trainKm && !planeKm && !busKm) {
        result.local += 1;
      } else if (planeKm) {
        result.plane += 1;
      } else if (trainKm) {
        result.train += 1;
      }
      if (co2 > 0) { result.travel += 1; }
    });
    return result;
  }

  function updateCountryList(rows) {
    var list = document.getElementById('statistics-country-list');
    if (!list) { return; }
    var countries = {};
    rows.forEach(function (row) {
      var country = row.country_code || 'Unknown';
      countries[country] = (countries[country] || 0) + 1;
    });
    var ordered = Object.keys(countries).sort(function (a, b) {
      return countries[b] - countries[a] || a.localeCompare(b);
    });
    list.textContent = '';
    if (!ordered.length) {
      list.textContent = 'No participants selected.';
      return;
    }
    ordered.forEach(function (country, index) {
      var span = document.createElement('span');
      if (country !== 'Unknown') {
        var flag = document.createElement('img');
        flag.className = 'statistics-country-flag';
        flag.src = 'https://flagcdn.com/24x18/' + country.toLowerCase() + '.png';
        flag.alt = '';
        flag.width = 24;
        flag.height = 18;
        span.appendChild(flag);
      }
      span.appendChild(document.createTextNode(country + ' ' + countries[country] +
        ' (' + percent(countries[country], rows.length) + '%)'));
      list.appendChild(span);
      if (index < ordered.length - 1) { list.appendChild(document.createTextNode(', ')); }
    });
  }

  function updateHistogram(rows) {
    var histogram = document.getElementById('statistics-co2-histogram');
    if (!histogram) { return; }
    var values = rows.map(function (row) {
      var trainKm = number(row, 'train_km');
      var planeKm = number(row, 'plane_km');
      return {
        value: number(row, 'total_co2_kg'),
        mode: (!trainKm && !planeKm) ? 'local' : (planeKm ? 'plane' : 'train')
      };
    }).sort(function (a, b) {
      return a.value - b.value;
    });
    var maximum = Math.max.apply(null, values.map(function (item) {
      return item.value;
    }).concat([1]));
    histogram.textContent = '';
    var axis = document.createElement('div');
    axis.className = 'statistics-histogram__axis';
    [maximum, maximum / 2, 0].forEach(function (value) {
      var tick = document.createElement('span');
      tick.textContent = Math.round(value) + ' kg';
      axis.appendChild(tick);
    });
    var plot = document.createElement('div');
    plot.className = 'statistics-histogram__plot';
    values.forEach(function (item) {
      var bar = document.createElement('div');
      bar.className = 'statistics-histogram__bar';
      var column = document.createElement('span');
      column.className = 'statistics-histogram__column statistics-histogram__column--' + item.mode;
      column.style.setProperty('--statistics-bar-height', (item.value * 100 / maximum) + '%');
      column.setAttribute('aria-hidden', 'true');
      bar.appendChild(column);
      plot.appendChild(bar);
    });
    histogram.appendChild(axis);
    histogram.appendChild(plot);
    histogram.setAttribute('aria-label', 'CO2 emissions per participant, sorted from lowest to highest; ' +
      values.length + ' participant bars, maximum ' + Math.round(maximum) + ' kg.');
  }

  function updateAnalysis(rows) {
    var summary = summarize(rows);
    var travelling = summary.plane + summary.train;
    var distanceTotal = summary.trainDistance + summary.planeDistance + summary.busDistance;
    var co2Total = summary.trainCo2 + summary.planeCo2 + summary.busCo2;
    var modePie = document.getElementById('statistics-mode-pie');
    if (modePie) {
      modePie.style.setProperty('--statistics-train-share', percent(summary.train, travelling) + '%');
      modePie.setAttribute('aria-label', 'Train: ' + summary.train + ' participants (' +
        percent(summary.train, travelling) + '%). Plane: ' + summary.plane + ' participants (' +
        percent(summary.plane, travelling) + '%).');
    }
    updateText('statistics-train-key', 'Train: ' + summary.train + ' (' + percent(summary.train, travelling) + '%)');
    updateText('statistics-plane-key', 'Plane: ' + summary.plane + ' (' + percent(summary.plane, travelling) + '%)');
    updateBar('statistics-train-distance-value', 'statistics-train-distance-bar', summary.trainDistance, distanceTotal, 'km');
    updateBar('statistics-plane-distance-value', 'statistics-plane-distance-bar', summary.planeDistance, distanceTotal, 'km');
    updateBar('statistics-bus-distance-value', 'statistics-bus-distance-bar', summary.busDistance, distanceTotal, 'km');
    updateBar('statistics-train-co2-value', 'statistics-train-co2-bar', summary.trainCo2, co2Total, 'kg');
    updateBar('statistics-plane-co2-value', 'statistics-plane-co2-bar', summary.planeCo2, co2Total, 'kg');
    updateBar('statistics-bus-co2-value', 'statistics-bus-co2-bar', summary.busCo2, co2Total, 'kg');
    updateText('statistics-co2-total', Math.round(co2Total / 1000) + ' t');
    updateText('statistics-co2-per-participant', Math.round(rows.length ? co2Total / rows.length : 0) + ' kg');
    updateText('statistics-co2-per-traveller', Math.round(summary.travel ? co2Total / summary.travel : 0) + ' kg');
    updateText('statistics-co2-median', Math.round(median(rows.map(function (row) {
      return number(row, 'total_co2_kg');
    }))) + ' kg');
    updateText('statistics-co2-traveller-median', Math.round(median(rows.filter(function (row) {
      return number(row, 'total_co2_kg') > 0;
    }).map(function (row) {
      return number(row, 'total_co2_kg');
    }))) + ' kg');
    updateText('statistics-origin-summary', 'We associated one country with each participant. This is derived from their stated travel origin, or, where not given, from their affiliation. The data contains ' +
      summary.local + ' local participants from Liverpool; among the rest, ' + summary.plane + ' (' +
      percent(summary.plane, travelling) + '%) travelled primarily by plane, ' + summary.train + ' (' +
      percent(summary.train, travelling) + '%) primarily by train.');
    updateCountryList(rows);
    updateHistogram(rows);
  }

  function colorForFraction(fraction) {
    var red = Math.round(255 * fraction).toString(16).padStart(2, '0');
    var blue = Math.round(255 * (1 - fraction)).toString(16).padStart(2, '0');
    return '#' + red + '00' + blue;
  }

  function updateMap() {
    if (!map || !mapLayer) { return; }
    mapLayer.clearLayers();
    var events = selectedEvents();
    function countsFor(properties) {
      var counts = { n_participants: 0, n_plane: 0, n_train: 0 };
      events.forEach(function (event) {
        var eventCounts = properties.events && properties.events[event];
        if (eventCounts) {
          counts.n_participants += eventCounts.n_participants || 0;
          counts.n_plane += eventCounts.n_plane || 0;
          counts.n_train += eventCounts.n_train || 0;
        }
      });
      return counts;
    }
    L.geoJSON(originsGeoJSON, {
      filter: function (feature) {
        return countsFor(feature.properties).n_participants > 0;
      },
      pointToLayer: function (feature, latlng) {
        var properties = feature.properties;
        var counts = countsFor(properties);
        var fraction = counts.n_plane / counts.n_participants;
        var color = colorForFraction(fraction);
        var marker = L.circleMarker(latlng, {
          radius: 4 + 3 * Math.sqrt(counts.n_participants),
          color: color, weight: 1, fillColor: color, fillOpacity: 0.6
        });
        var popup = document.createElement('div');
        var title = document.createElement('strong');
        title.textContent = properties.city + ' (' + properties.country_code + ')';
        popup.appendChild(title);
        popup.appendChild(document.createElement('br'));
        popup.appendChild(document.createTextNode(counts.n_participants + ' participant(s)'));
        popup.appendChild(document.createElement('br'));
        popup.appendChild(document.createTextNode('Plane: ' + counts.n_plane + ', train: ' + counts.n_train));
        marker.bindPopup(popup);
        return marker;
      }
    }).addTo(mapLayer);
  }

  function setupOriginsMap() {
    var container = document.getElementById('origins-map');
    if (!container || typeof L === 'undefined' || !originsGeoJSON) { return; }
    map = L.map(container).setView([50, 10], 4);
    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
    mapLayer = L.layerGroup().addTo(map);
    updateMap();
  }

  function update() {
    var events = selectedEvents();
    var rows = participants.filter(function (row) { return events.indexOf(row.event) !== -1; });
    updateAnalysis(rows);
    updateMap();
  }

  window.addEventListener('load', function () {
    document.querySelectorAll('input[name="statistics-event"]').forEach(function (input) {
      input.addEventListener('change', update);
    });
    setupOriginsMap();
    update();
  });
}());
