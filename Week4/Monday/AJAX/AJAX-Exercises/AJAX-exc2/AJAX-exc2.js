//Exercise 2

const fetch = function (queryType, queryValue){($.ajax({
        method: "GET",
        url: (queryType == "isbn") ? `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}` : `https://www.googleapis.com/books/v1/volumes?q=title:${queryValue}`,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
    )
}


fetch("title", "How to Win Friends and Influence People") 

