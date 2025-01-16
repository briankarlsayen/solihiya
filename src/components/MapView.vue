<script lang="ts">
import mapboxgl from "mapbox-gl";

export default {
  name: "Contact",
  mounted() {
    // Set your Mapbox access token

    const mapToken = import.meta.env.VITE_MAP_TOKEN;

    mapboxgl.accessToken = mapToken;
    // Initialize the map
    const map = new mapboxgl.Map({
      container: "map", // ID of the HTML element to contain the map
      style: "mapbox://styles/mapbox/outdoors-v12?optimize=true", // Map style
      center: [119.96682240258258, 15.34890682307273], // Initial map center [longitude, latitude]
      zoom: 14, // Initial map zoom level
    });
    // Add a marker (optional)
    new mapboxgl.Marker()
      .setLngLat([119.96682240258258, 15.34890682307273]) // Coordinates of the marker [longitude, latitude]
      .addTo(map);
  },
};
</script>

<template>
  <div id="map" class="map"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 400px; /* Adjust height as needed */
  margin-top: 20px;
}
#static {
  background-image: url(`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/119.966,15.348,14/600x400?access_token={{import.meta.env.VITE_MAP_TOKEN}}`);
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
}
</style>
