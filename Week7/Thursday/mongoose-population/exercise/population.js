const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/outerSpace', { useNewUrlParser: true })

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String
})

const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema)
const Planet = mongoose.model('Planet', planetSchema)
const Visitor = mongoose.model('Visitor', visitorSchema)

// const s1 = new SolarSystem({
//     planets: [],
//     starName: 'Sun'
// })

// const p1 = new Planet({
//     name: 'Jupiter',
//     system: s1,
//     visitors: []
// })

// const v1 = new Visitor({
//     name: 'alien',
//     homePlanet: p1,
//     visitedPlanets: []
// })

// s1.planets.push(p1)
// p1.visitors.push(v1)
// v1.visitedPlanets.push(p1)

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// v1.save()
// s1.save()
// p1.save()

Visitor.find({}, function (err, visitor) {
    console.log(visitor[1].visitedPlanets)
})


Planet.findOne({}, 
    function(err, planet){
        console.log(planet.visitors)
    })

SolarSystem.findOne({}).populate({
    path: 'planets',
    populate: { path: 'visitors'}
}).exec(function(err, system){
    console.log(system.planets)
})

Visitor.findOne({}).populate({
    path: 'homePlanet',
    populate: { path: 'system'}
}).exec(function(err, visitor){
    console.log(visitor.homePlanet.system.starName)
})

Planet.findOne({}).populate({
    path: 'system visitors'
}).exec(function(err, planet){
    console.log(planet.system.starName)
    console.log(planet.visitors)
})