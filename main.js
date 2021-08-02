// const apiKey='';
const mymap = L.map('map').setView([-0.505, 37.29], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
}).addTo(mymap);

// Adding marker
const marker= L.marker([-0.505,37.39]).addTo(mymap);

//  Adding popup to the marker
//marker.bindPopup("<h3>Hello World</h3>");//.openPopup();
let template='<div class="col text-align-center"><h3>Empirors and Kings</h3><img src="empirors.jfif" class="rounded-circle" width="150px" height="150px" alt=""><i class="fa fa-fire" aria-hidden="true"></i></div>'
marker.bindPopup(template);


//Adding the circle
const circle=L.circle([-0.505,37.39],{
	radius:500,
	color:'green',
	// fillColor:'red',
	// fillOpacity:1,
}).addTo(mymap).bindPopup("<h4>I am the circle...</h4>");
