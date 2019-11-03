// // Spot Check 1
// var items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
// ]

// // Write a for loop here that loops through
// // the items array, creates a template for each
// // item, and appends it to the items div.

// for (let item of items) {
//     const source = $('#store-template').html();
//     $(".items").append(`
// <p> ${item.item} - ${item.price}</p>
// `)
// }

// const render = function(){
//     const source = $("#store-template").html()
//     const template = Handlebars.compile(source)
//     for(let item of items){
//     let someHTML = template({item: item.item, price: item.price})
//     $(".items").append(someHTML)
//     }
// }
// render()

// // Spot Check 2
// var classData = {
//     classmates: [
//         { name: "That on gal", description: "Always has the ansswer" },
//         { name: "The weird dude", description: "Quick with a smile" },
//         { name: "Taylor", description: "Just Taylor" }
//     ]
// }

// var source = $("#class-template").html();
// var template = Handlebars.compile(source);
// var someHTML = template(classData);

// $('.classroom').append(someHTML)

// Spot Check 3
const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: false },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: false },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
    ]
};

let source = $('#menu-template').html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);

// append our new html to the page
$('.menu').append(newHTML);

// //Spot Check 4
// var animalData = {
//     animals: ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"],
//     languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
// }

// var source = $("#animals-template").html();
// var template = Handlebars.compile(source);
// var someHTML = template(animalData);

// $("#animals").append(someHTML)

// var source = $("#lang-template").html();
// var template = Handlebars.compile(source);
// var someHTML = template(animalData);

// $("#lang").append(someHTML)