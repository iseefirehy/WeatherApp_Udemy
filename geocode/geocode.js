const request = require('request');



var geocodeAddress = (address,callback)=>{
    var encodedAddress = encodeURIComponent(address);

    //console.log(argv);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },(error,response,body)=>{
        if(error){
            callback('Google Cannot provide any information');

        }else if(body.status === 'ZERO_RESULTS'){
            callback('unable to find that address.')

        }else if(body.status === 'OK') {
            callback(undefined,{
              address:body.results[0].formatted_address,
              latitude:body.results[0].geometry.location.lat,
              longitude:body.results[0].geometry.location.lng
            })
        }
    })
};

module.exports.geocodeAddress = geocodeAddress;