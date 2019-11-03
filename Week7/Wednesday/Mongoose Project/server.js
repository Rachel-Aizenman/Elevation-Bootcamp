const express = require('express')
// const request = require('request')
const api = require('./server/routes/api')
const app = express()
const port = 1000
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expensesDB', { useNewUrlParser: true })

app.use('/', api)


//===========================================//
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
// const testRoutes = require('../utils/routes')


