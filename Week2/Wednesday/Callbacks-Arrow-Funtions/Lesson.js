// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()


// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// // }

// // first(second)

// //

// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

//

// setTimeout(function(){console.log(new Date())}, 1000)

// const timer = function(){
//     console.log(new Date())
//   }

//   setInterval(timer, 1000)


//

//   const greet = function(){
//       console.log("Hello there")
//   }

//   const greet = () => {
//     console.log("Hello there")
//   }
//greet()

// const greet = (name) => {
//     console.log("Hello there, " + name)
//   }

// const greet = name =>
// console.log("Hello there " + name)

//   greet("Jolene") 


//

// const square = number => 
// console.log(number* number)

// square(4)


//Spot Check 5
// const getFormalTitle = (title, name) => title + name


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) 

//

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

//Spot Check

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => {
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()
