---
layout: default
title: Where to stay in Liverpool
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

  <h2>Where to stay</h2>

  <div class="grid">

    <!-- On campus -->
    <div class="card card--vertical">

    <div class="card-inner">
      
      <div class="card-image">
        <img src="/assets/images/crownplace.jpg" alt="Reception view">
      </div>

      <div class="card-content">
      
      <h3>On-campus accommodation</h3>

      <p>
        We offer a limited number of rooms in the 
        <a href="https://www.liverpool.ac.uk/accommodation/find-accommodation/crown-place/">Crown Place student halls</a>
located next to the venue.
      </p>

      <div class="highlight">
        <ul>
          <li>Single en-suite rooms</li>
          <li>Breakfast included (nearby restaurant)</li>
          <li>Access to shared kitchen facilities</li>
        </ul>
      </div>

      <p>
        Further details on pricing and booking will follow shortly.
      </p>
      </div>



    </div>
    </div>

    <!-- Hotels -->
    <div class="card">
      <h3>Hotels</h3>

      <p>
        There are many hotels within walking distance of the campus and city centre.
      </p>

<div class="highlight" markdown="1">
- <a href="https://all.accor.com/hotel/B737/index.en.shtml">Novotel Liverpool Paddington Village</a> <br>
    4*, adjacent to campus, 4 minute walk
  <details class="conference-code">
  <summary>Conference Discount Code Available</summary>
  <p>
  We have agreed rates with Novotel Liverpool Paddington Village: Standard King rooms for single-occupancy with Bed & Breakfast at the following rates.
  <br>

  <table border="1" cellpadding="8" cellspacing="0">
  <thead>
  <tr>
  <th>Date</th>
  <th>Rate (single-occupancy, B&B)</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Monday 31 August</td>
  <td>£97/night</td>
  </tr>
  <tr>
  <td>Tuesday 1 September</td>
  <td>£97/night</td>
  </tr>
  <tr>
  <td>Wednesday 2 September</td>
  <td>£97/night</td>
  </tr>
  <tr>
  <td>Thursday 3 September</td>
  <td>£97/night</td>
  </tr>
  <tr>
  <td>Friday 4 September</td>
  <td>£97/night</td>
  </tr>
  <tr>
  <td>Saturday 5 September</td>
  <td>£170/night</td>
  </tr>
  </tbody>
  </table>
  <br>
  Bookings must be made by phone or email, quoting the unique discount code <strong>1265788</strong>.

  Please contact the Reservations Team on +44 151 245 6694 or +44 151 245 6697 between the hours of 9am - 5pm Monday to Friday (UK hours). Alternatively, email <a href="mailto:HB737-RE@accor.com">HB737-RE@accor.com</a> and one of the team will be in touch as soon as possible.
  <br><br>
  Double-occupancy is available at £15/night.
  <br><br>
  Note: an additional Liverpool Accommodation BID Charge of £2.40/night is applicable to all
  bookings.
  </p>
  <div class="divider"></div>
  </details>

- <a href="https://www.theliner.co.uk/">The Liner Hotel</a> <br>
    3*, next to the station, 15 minute walk
- <a href="https://www.premierinn.com/gb/en/hotels/england/merseyside/liverpool/liverpool-city-centre-lime-street.html">Premier Inn Liverpool City Centre (Lime Street) hotel</a> <br>
    3*, adjacent to station, 15-20 minute walk
- <a href="https://www.radissonhotels.com/en-us/hotels/radisson-red-liverpool">Radisson RED Liverpool (Lime Street) </a><br>
    4*, adjacent to station, 15-20 minute walk
- <a href="https://www.ihg.com/holidayinn/hotels/gb/en/liverpool/lplls/hoteldetail">Holiday Inn Liverpool - City Centre by IHG</a><br>
    4*, adjacent to station, 15-20 minute walk
- <a href="https://www.adagio-city.com/gb/hotel-7332-aparthotel-adagio-liverpool-city-centre/index.shtml">Aparthotel Adagio Liverpool City Centre</a> <br>
    4*, aparthotel, 15-20 minute walk 
</div>

      <p>
        There are many more options in Liverpool, including options close to the historic docks such as <a href="https://www.hilton.com/en/hotels/lplhihi-hilton-liverpool-city-centre/">Hilton Liverpool City Centre</a> which would be a slightly longer walk to the venue.

      </p>
    </div>

  </div>
</section>

