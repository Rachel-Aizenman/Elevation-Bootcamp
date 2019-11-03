
// Exercise 2
let myList = [
    {food: "sandwich", drink: "juice"},
    {food: "laffa", drink: "water" }
]

myList[0].food = "pita"
myList.splice(1, 1)
console.log(myList)

//Exercise 3
let moreList = [
    {food: "salad", drink: "seltzer"},
    {food: "sushi", drink: "soda"}
]

myList.push(...moreList);
console.log(myList)

//Exercise 4
let library = {
    books: 
    [
        {title: "Scorcer's", author: "JK Rowling"},
        {title: "Chamber", author: "JK Rowling"}

    ]
}

myList.push(...library.books);
console.log(myList)

