//Exercise 4

$.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=gaShA0fysEp0r9UbwNBelHPoTVWD1CWU"
, function(result){
    let firstGIF = result.data[0]
    console.log(firstGIF.embed_url)
})

