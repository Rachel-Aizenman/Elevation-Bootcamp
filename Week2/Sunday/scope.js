//===================================================================================
//Section 1
//===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")    
// //     //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// } else {
// //     console.log("Cow says " + cowSound)
// }

// //===================================================================================
// //Section 3
// //===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// //===================================================================================
// //Section 4
// // //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

// //===================================================================================
// //Section 5
// //===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// // else {
// //     console.log("No idea where this person is.")
// }

// //===================================================================================
// //Section 6
// //===================================================================================
// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()

// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }
//1
// const counter = {
//     count: 0,

//     updateCounter: function () {
//       this.count += 1;
// //     }
// //   };

// //   counter.updateCounter();
// //   counter.updateCounter();
// //   counter.updateCounter();

// //   alert(counter.count);
//   //2
// //   const cat = {
// //     makeNoise: function () {
// //       alert(this.noise);
// //     },
// //     noise: "Meow!"
// //   };

// //   const dog = {
// //     makeNoise: cat.makeNoise,
// //     noise: "Woof!"
// //   };

// //   cat.makeNoise();
// // //   dog.makeNoise();

// // const makeNoiseFunction = function () {
// //     alert(this.noise);
// //   }

// //   const cat = {
// //     makeNoise: makeNoiseFunction,
// //     noise: "Meow!"
// //   };

// //   const dog = {
// //     makeNoise: makeNoiseFunction,
// //     noise: "Woof!"
// //   };

// //   cat.makeNoise();
// // //   dog.makeNoise();

// // const person = {
// //     username: "Felicia",
// //     introduce: function(){
// //       console.log("Hi, I'm " + this.username)
// //     }
// //   }

// //   person.introduce() //throws an error

// // EXERCISES
// //Exercise 1
// const person = {
//     hungry: true,

//     feed: function () {
//       if (this) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

//   person.feed() //should alert "I'm no longer hungry"

//   //Exercise 2
//   const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + this.liters + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//Exercise 3
// const pumpFuel = function (airplane) {
//     this.fuel += 1;
//   };

//   const airplane = {
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

// //Exercise 4

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(x){
//         this.coinCount -= x
//     }
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//Exercise 5
//   const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

// //Exercise 6

// const coffeeShop = {
//     beans: 40,

//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12
//     },

//     makeDrink: function (drinkType) {
//         if (this.drinkRequirements[drinkType]) {
//             let beanCount = this.drinkRequirements[drinkType]
//             if (this.beans - beanCount < 0) {
//                 console.log("Sorry, we're all out of beans")
//             } else {
//                 this.beans -= beanCount
//             }
//         } else {
//             console.log("Sorry, we don't make " + (drinkType))
//         }


//     }
// }
// // for(let each of drinkRequirements.coffeeShop){

// // }

// // if(beans.coffeeShop - makeDrink == < 0 ){
// //     console.log("Sorry, we're all out of beans")

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



// create a function that:
// allows drink making from requirments; otherwse prints "sorry"
// subtracts the drinkRequirments bean count from coffeShop bean count, every time a drink is made
// alerts when all out of beans
