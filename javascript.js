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

    menuToggle.classList.toggle("active"); // Toggle active class for styling

    // Toggle the visibility of menu-links
    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}

