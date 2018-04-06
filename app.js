const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
       }
    })
    .help()
    .alias('help','h')
    .argv;

    console.log(argv);
request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1800%20fumia%20pl%20california',
    json: true
},(error,response,body)=>{
    console.log(`Address: ${body.results[0].geometry.location.lat} + ${body.results[0].geometry.location.lng}`);
});