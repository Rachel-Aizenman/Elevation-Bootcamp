// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, '..', 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})



// Routes
// app.get('/people', function (req, res) {
//     Person.find({}, function (err, people) {
//         res.send(people)
//     })
// })

