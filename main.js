const apiKey='pk.eyJ1IjoiY29kZXJwYXNzIiwiYSI6ImNrcWRwbnE1dDE4aDAybm92ZXZvMWZoNXYifQ.RwNOEzig0atTUkVBWvNBiQ';
const mymap = L.map('map').setView([-0.505, 37.29], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
}).addTo(mymap);

// Adding marker
const marker= L.marker([-0.505,37.39]).addTo(mymap)