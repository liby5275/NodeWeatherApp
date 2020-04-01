const yargs = require('yargs')
const weather = require('./weather.js')
const fs = require('fs')

yargs.command({
    command:'location',
    describe:'enter the location to get the weather',
    builder:{
        location:{
            describe:'location',
            type:'string',
            demandOption:true
        }
    },
    handler(argv){
       weather.processLocation(argv.location, (callbackWoeid) => {
           weather.getWeatherInfo(callbackWoeid, (callbackError,callbackdata) =>{
            console.log('error occured is '+callbackError)
            console.log('todays weather of your location is '+callbackdata.consolidated_weather[0].weather_state_name)
           })
       })
       
    }
}).argv

console.log('hello bibin')


