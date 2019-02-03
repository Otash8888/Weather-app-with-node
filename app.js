const request = require('request')

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1772%2046th%20street%20brooklyn&key=AIzaSyA3cOjORSGkNhXZWjBtuWCwNGhWJnKbdW8',
  json:true
},(error,response,body) => {

  console.log(`Formatted address ${body.results[0].formatted_address}`);

  console.log(`Latitude:  ${body.results[0].geometry.location.lat}`)

  console.log(`Logitude:  ${body.results[0].geometry.location.lng}`)
  // console.log(JSON.stringify(body, undefined, 2));
  //readable formating
  console.log(`${body.results[2].long_name}`)
})
