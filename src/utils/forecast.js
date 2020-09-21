//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const request = require('postman-request')

const forecast = (latitude,longitude,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=e194f5d41d913a8410652c5af18945fe&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to remote service',undefined)
        } else if(body.error){
            callback('unable to find the location. Please enter the valid co-ordinates',undefined)

        }else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature + ' degrees Out.'+ ' it feels like '+ body.current.feelslike+ ' degrees out.' + ' The Humidity is '+body.current.humidity 

            )
        }
    })

}
module.exports = forecast



var options = {
  'method': 'POST',
  'url': 'https://cholaengage.cholainsurance.com/inf_authenticate_otp',
  'headers': {
    'Accept': 'text/xml',
    'Content-Type': 'text/xml',
    'SOAPAction': 'http://tempuri.org/authenticate_otp',
    'Cookie': 'BIGipServerTest_Algorithm=rd2o00000000000000000000ffff0a691604o80; ASPSESSIONIDSQBDTSQD=KDOJMAMDEPAIAENALAPDBECK'
  },
  body: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\\n\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\\n  \n    <soap:Body>\\n    \n        <authenticate_otp xmlns=\"http://tempuri.org/\">\\n      \n            <Token>ISPL856956</Token>\\n\n            <Emplid>606557</Emplid>\\n\n        </authenticate_otp>\\n\n    </soap:Body>\\n\n</soap:Envelope>"
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});