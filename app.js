const geocode = require("./utils/geocode");
const forecast = require(".utils/forecast");

const address = process.argv[2]; // for reading data from console log

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&units=metric&appid=";
// // for adding query as string , after URL use "?key=keyvalue&otherkey=othervalue

// Geocoding
// two types of geocoding : forward geocoding and reverse geocoding
// forward geocoding: address to longitude and latitude
// reverse geocoding: longitude and latitude to address
// by Geo_coding we can convert location name to geocode or geocode to location name

if (!address) {
  console.log("please provide an address");
} else {
  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error); // if we use return than dont need to use else
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecast);
    });
  });
}
