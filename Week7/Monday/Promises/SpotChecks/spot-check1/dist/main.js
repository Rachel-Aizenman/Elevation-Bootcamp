//spotcheck 1
$.get('/randomWord')
    .then(function (word) {
        console.log(word)
    })

//spotcheck 2
$.get('/sentiment/Ploy')
    .then(function (sentiment) {
        console.log(sentiment)
    })

//
$.get('randomWord')
    .then(function (word) {
        console.log(word)
        return $.get(`/synonyms/${word}`)
    })
    .then(function (synonyms) {
        console.log(synonyms)
    })



const printResults = function(word, synonyms, sentiment){
    console.log(`the word ${word} has a ${sentiment === 1 ? "positive": sentiment === -1 ? "negative" : "neutral"} sentiment, its synonms are: ${synonyms}`)
}

$.get('/randomWord')
    .then(function(word){
        let synonymPromise = $.get('/synonyms/' + word)
        let sentimentPromise = $.get('/sentiment/' + word)
        Promise.all([synonymPromise, sentimentPromise])
            .then(function(results){
                printResults(word, results[0], results[1] )
            })
    })
