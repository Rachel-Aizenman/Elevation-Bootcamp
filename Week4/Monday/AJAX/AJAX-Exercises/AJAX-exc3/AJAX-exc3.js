//Exercise 3

const fetch = function (queryType, queryValue) {
    ($.ajax({
        method: "GET",
        url: (queryType == "isbn") ? `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}` : `https://www.googleapis.com/books/v1/volumes?q=title:${queryValue}`,
        success: function (data) {
            data.items.forEach(i => console.log(i.volumeInfo.title, i.volumeInfo.authors, i.volumeInfo.industryIdentifiers))
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
    )
}


fetch("title", "How to Win Friends and Influence People")


