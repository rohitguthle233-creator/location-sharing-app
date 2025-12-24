document.getElementById("getLocationBtn").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: lat, lng: lng }
    });

    new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: "Your Location"
    });

    alert(`Location shared! Latitude: ${lat}, Longitude: ${lng}`);
}
