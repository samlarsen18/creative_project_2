function initMap() {
  // The location of Uluru

  var latitude = parseFloat(document.getElementById('lat').innerHTML);
  var longitude = parseFloat(document.getElementById('lng').innerHTML);

  var location = {
    lat: latitude,
    lng: longitude
  };

  // The map, centered at location
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 14,
      center: location,
      mapTypeId: 'terrain',
      disableDefaultUI: true,
      mapTypeControl: true
    });

  console.log(map);
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}