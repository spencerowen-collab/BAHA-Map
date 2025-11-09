mapboxgl.accessToken = 'pk.eyJ1IjoiaW52aXNpYmxlbGVtb25zIiwiYSI6ImNtaDlkNzZpczA1Z2oybHBvaDhmZWh4ZjcifQ.uXla2dINC-pnVhmm2LRD0g';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/invisiblelemons/cmh9dc4ob009l01rack870wd6',
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 11 // starting zoom
    });

map.on('load', function() {
  map.addSource('points-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/spencerowen-collab/BAHA-Map/refs/heads/main/data/183data%20(2).geojson'
  });

  map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
        'circle-color': '#8056BF',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FFFFFF'
    }
  });

  map.on('click', 'points-layer', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        const popupContent = `
        <div>
            <h3>${properties.Landmark}</h3>
            <p><strong>Address:</strong> ${properties.Address}</p>
            <p><strong>Architect & Date:</strong> ${properties.Architect and Date}</p>
            </p>${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
            ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
        </div>
    `;

    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(popupContent)
    .addTo(map);
  });

   // Change cursor to pointer when hovering over points
   map.on('mouseenter', 'points-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor back when leaving points
  map.on('mouseleave', 'points-layer', () => {
    map.getCanvas().style.cursor = '';
});

});
