
//Exercise 6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(let i in nums){
//     if(nums[i] === 709)
//     console.log(i)

// }

// //Exercise 7
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
let people = []
for (let i in names) {
    let newPeople = {
        name: names[i],
        age: ages[i]
    }
    people.push(newPeople)
}
console.log(people)


// //Exercise 7//
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
