const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https//....' + latitude + '&' + longitude + 'api-key';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        forecast:
          body.weather[0].description +
          ' It is currently ' +
          body.main.temp +
          'degrees out. There is a ' +
          body.main.humidity +
          ' of humidity',
      });
    }
  });
};
module.exports = forecast;
