// let timeNow = new Date()
// console.log(timeNow)

// const moment = require('jquery')

let formattedTimeNow = jquery().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017


// $("#small").click(function(){
//     $(this).css("background-color", "#f39c12")
// })

// http://data.nba.net/10s/prod/v1/2016/players.json

const request = require('request')

request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response)
})
