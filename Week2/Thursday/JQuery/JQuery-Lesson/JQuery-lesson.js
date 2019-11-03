// //Spot Check 1
// const header = $("#h1")
// console.log(header)

// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     ﻿return document.getElementById(elementId)
//         }
//     }


// console.log(myQuery("#Rachel"))

// $("h4").css("color", "red")

// //Spot Check 2
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color", "green")
// $("li:last-child").css("color", "pink")
// $("#brown-div").css("color",  "brown")

// //Spot Check 3
// $("#b1").addClass("class");
// $("#b2").addClass("class");

// //Spot Check 4
// $('#my-input').val("Terabyte")
// //
// const color = $("div").data().color  
// console.log(color) 

// // //Spot Check 5
// const data = $("div").data()
// console.log(data)
// console.log("The item with barcode " + data.barcode + " will expire on " + data.expirationdate)

//Spot Check 6
// box = $("#box")

// box.hover(function () {
//     box.css("background-color", "blue")
// })

//Spot Check 7

// $("button").click(function(){
// alert($("#my-input").val())
// }
// )

// Spot Check 8

// $(".box").hover(function(){
//     $(this).css("background-color", "blue")}
// )

// Spot Check 9 

// $(".feedme").click(function(){
//     let repeat = `<div class=feedme> ${$(this).text()} </div>`
//     $("body").append(repeat)
// }
// )
// //Spot Check 10

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let name of names){

//     $("body").append(`<div class='human'> ${name.first} - 
//     ${name.last}</div>`)

// // }

// //Spot Check 12

// $("button").click(function(){
//     $("#blogs").append("<div class=blog>SomeText</div>")
// })

// $("#blogs").click(".blog",function(){
// $(".blog").text("blargh")
// })

//spot Check 13


$("button").click(function () {
    $("#blogs").append("<div class='blog'>SomeText</div>")
})

$("#blogs").on("click",".blog", function () {
    $(this).text("blargh")
})
