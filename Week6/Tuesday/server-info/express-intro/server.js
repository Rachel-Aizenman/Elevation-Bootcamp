const express = require('express')
const app = express()
// console.log(express)

const port= 3000






// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
// })

app.listen(port, function(){
    console.log(`Running server on port`)
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})
