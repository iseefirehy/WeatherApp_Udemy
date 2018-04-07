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

    var encodedAddress = encodeURIComponent(argv.address);

    //console.log(argv);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
},(error,response,body)=>{
    if(error){
        console.log("Google Can't provide any information");
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('unable to find that address.');

    }else if(body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Address: ${body.results[0].geometry.location.lat} + ${body.results[0].geometry.location.lng}`);
    }
    });