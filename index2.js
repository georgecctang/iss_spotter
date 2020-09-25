const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(
    body => fetchCoordsByIP(body))
  .then(body => fetchISSFlyOverTimes(body))
  .then(body => nextISSTimesForMyLocation(body))
  .catch(err => console.log(err.message));
