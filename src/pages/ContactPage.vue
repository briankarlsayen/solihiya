<script setup lang="ts">
import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import MapView from "../components/MapView.vue";
</script>
<template>
  <div class="container">
    <h1 class="section-title">Contact</h1>

    <div id="layout">
      <MapView />
    </div>

    <h5 class="subscript">See the map for the store's location.</h5>

    <div>
      <h3>Got any suggestion/questions?</h3>
      <p>
        Address: Zambales - Pangasinan Rd, Iba, Zambales, Viction beach resort
      </p>
      <p>Email: silohiya@gmail.com</p>
      <p>Phone: 09876543210</p>
    </div>
    <div>
      <h3>Operating hours</h3>
      <ul class="hour-opts">
        <li>Monday (Closed)</li>
        <li>Tuesday-Friday: 8:00AM - 10:00PM</li>
        <li>Saturday-Sunday: 8:00AM - 12:00PM</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding-bottom: 1rem;
}
.section-title {
  text-transform: uppercase;
}

.subscript {
  margin-top: 10px;
  line-height: 0px;
}

#layout {
  flex: 1;
  display: flex;
  position: relative;
}
.hour-opts {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

p {
  line-height: 10px;
}
</style>
