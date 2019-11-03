// const greet = function(){
//     console.log("Hello there")
//   }
//   greet()
// const tellAJoke = function(){
//     console.log("cross the road?")
// }
// tellAJoke()
// const greet = function(name){
//     console.log("Hello there, " + name)
// }
// greet("Dexter")
// greet("Rachel")
// greet("Michal")
// const names = ["Menachem", "Avraham", "Shneor", "Chaya", "Dovi", "Sara", "Rivky", "Michal", "Tiferet"]
// for(let ten of names)
// greet(ten)


// const maalim = function(name, stage){
//     const user = {name: name, stage: stage}
//     console.log(user)
// }
// maalim("Rachel", "code")
// const add = function(x, y){
//     const sum = x + y
//     return sum
//     console.log("Returned " + sum)
//   }

//   add(1, 2)
//   greet() //works without a problem
// greetExpression() //throws an error

// function greet(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }
// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like " + food)
//     }
//   }
//   person.speak("cheese toast")

//Exercise 1//

// const calcAge = function(currentDate, birthDate){
//   currentDate: 2017
//   birthDate: 1989
//  return (currentDate - birthDate)
// }
// const age = calcAge(2017, 1989)

// console.log(age)

// // write a function called calcAge
// // have the function assign the 1st var as currentDate
// // assign the 2nd as DOB
// // subtract DOB by curentDate
// // assign the total to age

// const calcAge = function(){
//     console.log("Hello there")

// //Exercise 2//

// const calcAge = function(currentDate, birthDate){
//    let age1 = (currentDate - birthDate)
//    let age2 = (age1 - 1)
//   return{age1, age2}
//  }
// let age = calcAge(2017,1989)
// let passed = age.age1
// let notYet = age.age2


// console.log("You are either " + passed + "or " + notYet)


// add to calcAge's function the ability to:
// solve for age 1 and age 2 
// console.logs to "You are either " + (age1) + " or " + (age2)

//Exercise 3//

// let variable = [1,2,3,4,5,6,7]

// const isEven = function(variable){
// for(let each in variable)
//   if(each % 2 == 0){
//     console.log(true)
//   } else{
//     console.log(false)
//       console.log    }
//   }

//  console.log(isEven(variable))

// write a function called isEven that:
// whos paramiter is a variable that can accept any number 
// and will % that # by 2
// if the remaider is 0 will print True
// if remainder is 1 will print False

//Exercise 4
// let variable = [1,2,3,4,5,6,7]

// const isOdd = function(variable){
// for(let each of variable)
//   if(each % 2 === 1)
//     console.log(each)
//   }
// isOdd(variable)


//write a function
//make an array of numbers 
//print out the odd numbers

//Exercise 5

// create an array of #
const ray = [1,2,3,4,5,6,7,8,9,0]
const digit = 4
// write a function that holds the array & another #
const checkExist = function(ray, digit){
for(let each in ray){
  if(each == digit)
  console.log(digit)
}
}
checkExist(ray,digit)
//

// //Exercise 6

//create 

let calculator = {
  add: function(valueA, valueB) {
    valueA + valueB
  },
  subtract: function(valueA, valueB){
    valueA - valueB
  }
}


const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(20, 1))

console.log(calculator.add(result1, result2)) //should print 42
