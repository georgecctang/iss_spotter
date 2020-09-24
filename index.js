const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('184.147.138.33', (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }  
//   console.log('It worked! Returned Coordinates:' , data);
// });

// let coords = { latitude: 43.63190, longitude: -79.37160 };
let coords = { latitude: 143.63190, longitude: -1179.37160 };

fetchISSFlyOverTimes(coords, (error, response) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }  
  console.log('It worked! Returned responses:' , response);
});