// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// for(let companyIndex in companies){
//     console.log(companies[companyIndex])
// }
// for(let companyIndex in companies){
//     console.log(companyIndex)
// }
// for(let company of companies){
//     console.log(company)
// }

// for(let company of companies){
//     console.log("One day I will work at " + company)
// }

// let timer = 0;

// while(timer < 10){
//     console.log(timer); timer++;
// }
// while(companies.length > 0){
//     companies.splice(0, 1)
// }
// console.log(companies)

// // for(let i = 700; i < 771; i++){
// //     console.log(i)
// // }

//Exercise 1//

// let names = ["Chaya", "Sarah", "Rivka", "Michal", "Tiferet"]
// let ages = [12, 10, 8, 6, 2]
// for(let index in names){
//     console.log(names[index] + " is " + ages[index] + " years old")
// }

//Exercise 2

// let numbers = [2,4,6,8]
// let sum = 0
// for(let num of numbers){
//  sum += num
// }

// Exercise 3

// console.log(sum)
//  console.log(sum / numbers.length)

//Exercise 4

//  let nums = []
//  // write a loop the stops at 100 cells
//  // insert numbers 1-100 to the nums array

//  let counter = 0

//  while(nums.length < 100){
//      counter++
//     nums.push(counter)
//  }
// console.log(nums)

// // let set = []
// // for(i = 1; i < 101; i++){
// //  set += i
// // }
// //    console.log(set)

// Exercise 5

//    let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// for(let red in nums){
//     if(nums[red] % 2 == 0)
//         console.log(nums[red])
// }

// // loop the through array
// //divide each number by 2
// // diffrentiate between nums with a remainder of 0 and 1
// // print nums with a remaider of 1
// for(let digits of nums){
//     if(digits % 2 == 1){
//     console.log(digits)
//     }
// }

// // //Exercise 6//
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// // // make a loop 
// for(let red in nums){
//     if(nums[red] == 709){
//         console.log(red)
//     }
// }
// //identify the value of the numbers
// find number = 709
// find the number cell 

// // //Exercise 7//
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// // const keyValue = 

// for (let index in names){
//     let newppl = {
//         name: names[index],
//         age: ages[index]
//     }
// people.push(newppl)
// }
// console.log(people)

// // associate names to ages via index
// // format ^  in the key: value format
// // write a loop that pushes 
// // key & objects into the array: People

// //Exercise 8
// for(let red of people){
//     console.log(red.name + " is " + red.age + " years old")
// }

//Exercise 8 
