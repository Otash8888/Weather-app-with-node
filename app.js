const request = require('request')

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1772%2046th%20street%20brooklyn&key=AIzaSyA3cOjORSGkNhXZWjBtuWCwNGhWJnKbdW8',
  json:true
},(error,response,body) => {
  console.log(body);
})
