var latitude = parseFloat(document.getElementById('lat').innerHTML);
var longitude = parseFloat(document.getElementById('lng').innerHTML);

const url2 = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/20cb5378b369d10aebdeeb4292b5b6ea/" + latitude + "," + longitude;
fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    console.log(json.daily.data[0].summary);
    document.getElementById('weather').innerHTML = (json.daily.data[0].summary);
    var longitude = parseFloat(document.getElementById('lng').innerHTML);

  });