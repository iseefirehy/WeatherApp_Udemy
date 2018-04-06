const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1800%20fumia%20pl%20california',
    json: true
},(error,response,body)=>{
    console.log(`Address: ${body.results[0].geometry.location.lat} + ${body.results[0].geometry.location.lng}`);
});