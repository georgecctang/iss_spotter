const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Error: ", error);
  }
  // success, print out the deets!
  passTimes.forEach(passTime => {
    const { duration, risetime } = passTime;
  ;
  const dt = new Date(risetime * 1000);
  console.log(`Next pass at ${dt.toDateString()} ${dt.toTimeString()} for ${duration} seconds!`)
  })
});
