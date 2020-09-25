const request = require('request-promise-native');

const fetchMyIP = function() {
  // use request to fetch IP address from JSON API
  return request('https://api.ipify.org?format=json');
};


const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`);
};


const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
}


const nextISSTimesForMyLocation = function (body) {
  const passTimes = JSON.parse(body).response;
  passTimes.forEach(passTime => {
    const { duration, risetime } = passTime;
  ;
  const dt = new Date(risetime * 1000);
  console.log(`Next pass at ${dt.toDateString()} ${dt.toTimeString()} for ${duration} seconds!`)
  })
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };


 
