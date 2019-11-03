// //Try this out
// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })

// //Spot Check 1
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20Wind", function(result){
//     console.log(result)
// })

//Spot Check 2
$.get("https://jsonplaceholder.typicode.com/users", function(users){
    let lastUser = users[users.length - 1]
    let catchPhrase = lastUser.company.catchPhrase
    console.log(catchPhrase)

})

//Spot Check 3
const useData = function(data) {
    console.log(data);}

$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: useData
    }
  )

  

