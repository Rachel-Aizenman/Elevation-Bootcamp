const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy Birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS"
    },
{
        name: "Old school teacher",
        text: "Hey ace, have a good one"
    },
]



$("button").on("click", function () {
    posts.push({
        name: $("#name").val(),
        text: $("#text").val()
    });
    $("input").val("")
})


const render = function () {
   
    for(let post of posts) {
        let postBox = $("<h1>" + post.name + ":" + "</h1>" + "<p>" + post.text + "</p>") 
        $("#timeline").append(postBox)
    }
   
}

render()
