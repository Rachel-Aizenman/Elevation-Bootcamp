const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true})

const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String, 
    lastName: String,
    age: Number,
    address: {
        city: String,
        state: String,
        apartment: Number
    }
})

const Person = mongoose.model('person', personSchema)
let p1 = new Person({ firstName: 'David', lastName: 'Smith', age: 25})
console.log(p1)
// p1.save()

// Person.find({}, function (err, people){
//     console.log(people)
// })

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())

Person.findByIdAndUpdate('5db83d1b63d164062059a148', {age: 70},{new: true}, function(err, person){
    console.log(person)
})

Person.findById("5db83d1b63d164062059a148", function (err, person) {
    person.remove(function (err) {
        console.log(err) //usually this will be `null`, unless something went wrong
    })
})
