//Exercise 1
const fetch = ($.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
})) ;


const fetch = function(ISBN){($.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
}))} 

fetch(9782806269171)
