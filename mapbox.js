mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycmViYXJyZSIsImEiOiJjbHR6d29pOG4wNTRvMmlzM2IwdXd4bnJkIn0.-oZ0a4L3ZQtzFXpoPjmqbA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [18.3853, 59.4059],
    zoom: 10
});

var marker = new mapboxgl.Marker({
color: "#FF0000"
})
.setLngLat([18.3853, 59.4059])
.addTo(map);