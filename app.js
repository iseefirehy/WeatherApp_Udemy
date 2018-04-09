// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
// const argv = yargs
//     .options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch weather for',
//         string: true
//        }
//     })
//     .help()
//     .alias('help','h')
//     .argv;
//
//     geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
//         if(errorMessage){
//             console.log(errorMessage);
//         }else{
//             console.log(JSON.stringify(results,undefined,2));
//         }
//     });
//
const request = require('request');

request({
    url:'https://api.darksky.net/forecast/d8e79721c228cba4359b35cc744a78c6/37.3902956,-121.8961047',
    json: true
},(error,response,body)=>{
    if(error) {
        console.log('Unable to connect to Forecast.io server.');
    }else if(response.statusCode === 400){
        console.log('Unable to fetch weather.');
    }else if(response.statusCode === 200) {
        console.log(body.currently.temperature);
    }
});