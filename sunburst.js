require('dotenv').config()
const SunburstJS = require('sunburst.js')

async function getPrediction(lat=40,lng=-75){
  var sunburst = new SunburstJS();

  try {
    const session = await sunburst.createSession({
      email: process.env.SUNBURST_EMAIL,
      password: process.env.SUNBURST_PASSWORD,
      // type: 'token',
      // scope: ['predictions']
    });

    console.log(session);

    sunburst = new SunburstJS(session);

    const resp = await sunburst.quality({
      geo: [lat,lng]
    });
    console.log(JSON.stringify(resp,null,2))
    // features.forEach(({ geometry, properties }) => {
    //   const { coordinates } = geometry;
    //   console.log({ coordinates, properties });
    // });

    return resp.features[0].properties

  } catch (ex) {
    // Handle general network or parsing errors.
    return console.error(ex);
  }
}

module.exports.getPrediction = getPrediction
