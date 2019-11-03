const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB', {useNewUrlParser: true})
const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker: String, 
    price: Number,
})

const Computer = mongoose.model('computer', computerSchema)
let c1 = new Computer({ maker: 'Apple', price: 2500})
console.log(c1)
c1.save()
