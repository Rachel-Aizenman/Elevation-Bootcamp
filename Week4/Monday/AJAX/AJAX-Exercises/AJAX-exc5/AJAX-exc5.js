//Exercise 5

$("#search").click(function () {
    $("#appendHere").empty()
    const input = $("input").val();
    $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=gaShA0fysEp0r9UbwNBelHPoTVWD1CWU`, function (result) {
        let firstGIF = result.data[0]
        // console.log(firstGIF)
        const gifURL = firstGIF.embed_url
        console.log(gifURL)
        $("#appendHere").append(`<iframe src=${gifURL}></iframe>`)

    });
});
