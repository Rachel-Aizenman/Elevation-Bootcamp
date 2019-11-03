
const greet = function(name){
    console.log("Hello there, " + name)
}

greet("Lexi")

const part = function(lastName){
    console.log("Farewell for now, " + lastName)
}
part("Leitner")

const complete = function(ending){
    console.log("this is the " + ending)
}

complete("end.")

const home = function(city){
    console.log("I am from " + city)
}
home("Myrtle Beach")

const convo = function(qu){
    console.log("Where" + qu)
}
convo(" are you from?")

const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

for(let i of names){
    greet(i)
}

const states = ["SC", "NY", "LA", "PA"]
for(let s of states){
    home(s)
}

const noun = ["dog", "back", "front", "side"]
for(let q of noun){
    complete(q)
}