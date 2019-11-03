// exc 1
$.get('/randomWord')
    .then(function (word) {
        console.log(word)
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
    }).then(function(json){
    console.log(json)
    })

//exc 2

$.get('/randomWord')
    .then(function (word) {
        console.log(word)
     let randomBook = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
     let randomGIF = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=gaShA0fysEp0r9UbwNBelHPoTVWD1CWU`)
     Promise.all([randomBook, randomGIF])
        .then(function(results){
            console.log(results[0], results[1])
        })
    })

