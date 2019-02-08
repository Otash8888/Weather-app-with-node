const request = require('request')

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1772%2046th%20street%20brooklyn&key=AIzaSyA3cOjORSGkNhXZWjBtuWCwNGhWJnKbdW8',
  json:true
},(error,response,body) => {

  console.log(`Formatted address ${body.results[0].formatted_address}`);
  console.log(`${body.results[2].long_name}`)
  console.log(`Latitude:  ${body.results[0].geometry.location.lat}`)
  console.log(`Logitude:  ${body.results[0].geometry.location.lng}`)
  // console.log(JSON.stringify(body, undefined, 2));
  //readable formating

})



const results = []

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('fizzbuzz')
    } else if (i % 3 === 0) {
      results.push('fizz')
    } else if (i % 5 === 0) {
      results.push('buzz')
    } else {
      results.push(i)
    }
  }
}
fizzbuzz(16)
console.log(results);
