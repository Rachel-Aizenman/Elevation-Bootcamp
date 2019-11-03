// //Spot Check 1
// class Animal {
//     constructor(name, color){
//         this.name = name,
//         this.color = color, 
//         this.paraplegic = false
//     }
// }

// let dog = new Animal("Husk", "white")
// console.log(dog.name)

//Spot Check 2
class Human {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.isFriendly = false

    }
}

let Rachel = new Human("Rachel", 20)
console.log(Rachel)

//Spot Check 3
class Animal {
    constructor(name, numLegs, children) {
        this.name = name
        this.numLegs = numLegs
        this.children = children
    }
    giveBirth(name) {
        this.children.push(name)
        console.log(this.children)
    }
}

const cat = new Animal("puss", 4, [])
console.log(cat)
cat.giveBirth("Dolly")
cat.giveBirth("Spot")

//Spot Check 4

//  class Vehicle{
//      constructor(x, y, speed){
//          this.x = x,
//          this.y = y, 
//          this.speed = speed
//      }
//      getInfo(){
//    console.log("Cars are Great")}
//  }

//  const tractor = new Vehicle("x", "y", 200)
//  tractor.getInfo()

//Spot Check 5

class Vehicle {
    constructor(x, y, speed) {
        this.x = x,
            this.y = y,
            this.speed = speed,
            Vehicle.carsSold++
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles")
    }
    static calculateMoney() {
          console.log("We've made " + 3000 * this.carsSold + " dollars")

    }
}

Vehicle.carsSold = 0

const tractor = new Vehicle("x", "y", 200)
const helicopter = new Vehicle("x", "y", 100)
const car = new Vehicle("x", "y", 900)
Vehicle.calculateMoney()

// UML:
// x: string
// y: string
// speed: number
// getInfo(): function
// prints out a statment of how many cars were initiated (sold) in console. 
// calculateMoney(): function
// prints a statment stating the amount of $  made