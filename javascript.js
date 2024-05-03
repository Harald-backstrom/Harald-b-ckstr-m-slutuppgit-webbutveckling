function toggleLanguage() {
  var currentUrl = window.location.href;

  if (currentUrl.includes("-en.html")) {
    window.location.href = currentUrl.replace("-en.html", "-sv.html");
  } else if (currentUrl.includes("-sv.html")) {
    window.location.href = currentUrl.replace("-sv.html", "-en.html");
  }
}

function toggleMenu() {
  var menuToggle = document.getElementById("menu-toggle");
  var menuLinks = document.getElementById("menu-links");

  menuToggle.classList.toggle("active");

  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFycmViYXJyZSIsImEiOiJjbHR6d29pOG4wNTRvMmlzM2IwdXd4bnJkIn0.-oZ0a4L3ZQtzFXpoPjmqbA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [18.33913, 59.42748],
  zoom: 10,
});

var marker = new mapboxgl.Marker({
  color: "#FF0000",
})
  .setLngLat([18.33913, 59.42748])
  .addTo(map);
