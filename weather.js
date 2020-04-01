const request = require('request')

const processLocation = (location, callback) => {
    const urlTogetWoeid = 'https://www.metaweather.com/api/location/search/?query=' + location
    
    request({url:urlTogetWoeid, json:true}, (error, response) => {
        if(error){
            console.log('error occured. please check your URL');
        } else if(response.body.length === 0) {
            console.log('location not found! please enter a valid locaton')
        } 
        else {
        const dataJson = response.body;
        const woeid = dataJson[0].woeid
        callback(woeid)
        }
    })
    
}



const getWeatherInfo = (woeid, callback) => {  
const url = 'https://www.metaweather.com/api/location/'+woeid

request({url:url, json:true}, (error, response) => {
    if(error){
        callback('error occured', undefined)
    } else{
    const dataJson = response.body
    callback(undefined,dataJson)
} 
}) 

}

module.exports = {
    processLocation:processLocation,
    getWeatherInfo:getWeatherInfo
}