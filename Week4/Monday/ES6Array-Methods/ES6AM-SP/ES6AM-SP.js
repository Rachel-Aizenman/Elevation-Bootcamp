let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

// Spot Check 1 - filter
// let orangeArray = []
//     for (let v of vegetables) {
//         if(v.color == "orange"){
//      orangeArray.push(v)
//         }

//     }

// console.log(orangeArray)

let orangeArray = vegetables.filter(v => v.color == "orange")
// console.log(orangeArray)
// orangeArray.forEach(v => 
// console.log(v.name))

//Spot Check 2 - For Each
let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

const raise = function (person) {
    if (person.goodPerformance) {
        person.salary += 300

    }
}


people.forEach(raise)
// console.log(people)

//Spot Check 3 - Map
let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??",
    "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

let lowerCase = messagesFromDad.map(m => m.toLowerCase())
//  console.log(lowerCase)

//Spot Check 4 - 
let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]

const findById = id => posts.find(p => p.id === id)
console.log(findById(1))

const findCommentByID = (postID, commentID) => {
    let post = findById(postID)
    return post.comments.find(c => c.id == commentID)
}
console.log(findCommentByID(1, 0))

//Spot Check- Some & Every
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if (movies.some(m => m.studio == "Marvel")) {
    console.log("Lets go watch some movies")
} else {
    console.log("Let's stay at home")
}
if(movies.every(m => m.year > 2020)){
    console.log("futuristic stuff")
} else {
    console.log("yawn")
}
