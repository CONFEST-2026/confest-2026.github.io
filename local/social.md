---
layout: default
title: Location
subnav: local
---
<style>
/* normal layout */
.card-inner {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin: -1.5rem;
}

/* flip it */
.card--reverse .card-inner {
  flex-direction: row-reverse;
}

/* keep proportions stable */
.card-content {
  flex: 2 1 0;
  padding: 1.5rem;
}

.card-image {
  flex: 1 1 0;
  display: flex;
  min-height: 200px;
  overflow: hidden;
  min-width: 40%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

@media (max-width: 700px) {
  .card-inner {
    flex-direction: column-reverse;
  }

  /* make sure reverse cards don't flip weirdly */
  .card--reverse .card-inner {
    flex-direction: column-reverse;
  }

  .card-image {
    min-width: 100%;   /* override your 40% */
    width: 100%;
    height: 200px;     /* fixed height works better in vertical */
    min-height: 200px; /* optional: prevents conflicts */
  }

  .card-content {
    padding: 1.5rem;
  }
}
</style>

<div class="section">
  <div class="card">
    <div class="card-inner">
      
      <div class="card-content">
        <h3>Welcome Reception - Tuesday</h3>
        <p>
          The CONFEST 2025 welcome reception will take place at Spaces at the Spine nearby to the main conference venue. 
          </p><p>Drinks reception while
          enjoying views over the city skyline.
        </p>
      </div>

      <div class="card-image">
        <img src="/assets/images/LiverpoolSpineView.jpg" alt="Reception view">
      </div>

    </div>
  </div>
</div>

<div class="section">
  <div class="card card--reverse">
    <div class="card-inner">
      

      <div class="card-content">
        <h3>Dinner and Cruise - Thursday</h3>
        <p>
        The famous Mersey Ferries have been carrying passengers across the River Mersey for over 800 years, becoming one of Liverpool’s most iconic and enduring symbols.
        </p><p>
          Enjoy a relaxed dinner and live entertainment on this evening river cruise,  taking in the famous waterfront landmarks.
        </p>
      </div>


      <div class="card-image">
        <img src="/assets/images/DazzleFerry.jpg" alt="Reception view">
      </div>

    </div>
  </div>
</div>

<div class="section">
  <div class="card">
    <div class="card-inner">
      
      <div class="card-content">
        <h3>Football - TBC</h3>
        <p>
          We intend to organise the traditional CONFEST football game.
        </p>
        <p>
          The game will take place indoors, so please bring clean indoor trainers/shoes.
        </p>
      </div>

      <div class="card-image">
        <img src="/assets/images/SportCentre.jpg" alt="Reception view">
      </div>

    </div>
  </div>
</div>
 