const express = require('express')
const router = express.Router()

const Person = require('../models/Person')
router.get('/people', function(req, res){
    Person.find({}, function(err, people){
       res.send(people)
    })
})

module.exports = router

// exc 1
router.post('/person', function(req, res){
    let p7 = new Person(req.body)
    console.log(p7)
    p7.save()

    res.end()
})

// exc 2
router.put('/person/:id', function (req, res){
    let id = req.params.id
    console.log(id)

    Person.findById(id, function (err, person){
        person.age += 10
        person.save()
    })
    res.end()

})

// exc 3
router.delete('/apocalypse', function(req, res){
    Person.remove({}, function(err){
        console.log(err)
        res.end()
    })

})