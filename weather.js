var latitude = parseFloat(document.getElementById('lat').innerHTML);
var longitude = parseFloat(document.getElementById('lng').innerHTML);

const url2 = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/20cb5378b369d10aebdeeb4292b5b6ea/" + latitude + "," + longitude;
fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let result = "";
    let totalRain = 0.0;
    for (let i = 0; i < 3; i++) {
      totalRain += json.daily.data[i].precipProbability;
      console.log(totalRain);
    }
    result += json.hourly.summary;
    console.log(totalRain);

    let floodProbability = "";
    if (totalRain >= 2) {
      floodProbability = "<h5 style=\"color:red; display:inline;\"> HIGH</h5></h5>";
    } else if (totalRain > 1) {
      floodProbability = "<h5 style=\"color:orange; display:inline;\"> MODERATE</h5>";
    } else {
      floodProbability = "<h5 style=\"color:yellow; display:inline;\"> LOW</h5>";
    }
    result += "<h5><h5 style=\"display:inline;\"> Flash Flood probability: " + floodProbability + "</h5>";
    result += "<h5>Chance of rain the next 3 days: " + parseFloat((totalRain / 3) * 100).toFixed(2) + "%</h5>";
    //result += floodProbability;
    document.getElementById('weather').innerHTML = result;

  });