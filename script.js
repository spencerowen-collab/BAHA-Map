mapboxgl.accessToken = 'pk.eyJ1IjoiaW52aXNpYmxlbGVtb25zIiwiYSI6ImNtaDlkNzZpczA1Z2oybHBvaDhmZWh4ZjcifQ.uXla2dINC-pnVhmm2LRD0g';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/invisiblelemons/cmh9dc4ob009l01rack870wd6', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });