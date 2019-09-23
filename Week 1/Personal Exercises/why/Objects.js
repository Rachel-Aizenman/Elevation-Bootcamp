// const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: ["Pen", "Bottle", "Book"]
//   }
  const car ={
      color: "silver",
      numWheels: 4,
      isFancy: false
  }
  console.log("The " + car.color + " car has " + car.numWheels + " wheels.")
   if(car.isFancy = true){
      console.log(" It is fancy.")
  } else {
      console.log("It is not fancy")
  }



  const table = {
      numbLegs: 4,
      color: "wood brown"
  }
  console.log(table.yearPurchased)
  const animalCounts = {
      lion: 2,
      zebra: 11,
      ostrich: 1,
      tortoise: 4
  }
//   animalCounts.eagle = 24
animalCounts["eagle"] = 24
  console.log(animalCounts)
const human = {
    age: 0
}
const babyNameKey = "name"
const babyNameValue = "Goojibear"
human.name = "Goojibear"
console.log(human)
human.name = "Dudi"
console.log(human)

let obj ={
    item: "chair",
    toBeginning: true,
    items: ["red", "yellow", "green"]
}
if(obj.toBeginning == true){
     obj.items.unshift(obj.item)
}else{
    obj.items.push(obj.item)
}
console.log(obj)

const bag = {
    weight: 10,
    owner: "Larissa",
    items: [
        {item: "Pen", count: 2},
        {item: "Bottle", count: 1},
        {item: "Book", count: 3}
    ]
}
  console.log(bag.items[2].count)
  console.log(bag.items[0])

  let person = {
    firstName: "Dopple",
    lastName: "Ganger"
  }
  
  let p = person
  p.firstName= "Chappy"
  
  console.log(p)
  console.log(person)

  let p1 = {
      name: "Rachel",
      age: 20,
      city: "MyrtleBeach"
  }
  let p2 = {
      name: "Avraham",
      age: 32,
      city: "LosAngeles"

  }
  if(p1.age == p2.age && p1.city == p2.city){
      console.log("Jill wanted to date Robert")
  } else {"Jill wanted to date Robert, but couldn't"

  }
  
  console.log()

  

  