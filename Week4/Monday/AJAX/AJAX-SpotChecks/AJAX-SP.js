// //Spot Check 1 - API Requests
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function (result) {
//     // console.log(result.items[0].volumeInfo.description)
// })


// const getGeo = function(data){
//     console.log(data.users[0].address.geo)

// }

// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//     let catchPhrase = users[users.length - 1].company.catchPhrase
//     console.log(`${catchPhrase}`)

// }) 

// //Spot Check 2 - Requests
// const useData = function(data){
//  console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
    
//   })

// //Spot Check 3 - Error Handeling

// const fetch = ($.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// })) ;


//Spot Check 4- success & error
const useData = function(data){
console.log(data)
}

$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: useData
    }
)
