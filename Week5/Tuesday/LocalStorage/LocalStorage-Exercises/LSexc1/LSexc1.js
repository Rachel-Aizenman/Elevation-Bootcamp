let wisdom = []



$("#click").on("click", function () {
    const input = $("input")
    $("body").append(`<div>• ${input.val()}</div>`)
    wisdom.push({ text: input.val() })
    input.val("")
    if (wisdom.length % 2) {
        localStorage.wisdom = JSON.stringify(wisdom)
        // localStorage.wisdom.push(wisdom[wisdom.length - 1])
        // localStorage.wisdom.push(wisdom[wisdom.length - 2])
    }
   

// Renderer()
}
)

let data = JSON.parse(localStorage.wisdom)
for(i = 0; i < data.length; i++)
$("body").append(`<div class="wisdom">${data[i].text}<button class="x" >X</button></div>`)


$(".clear").click(function(){
    localStorage.removeItem("wisdom")
})

$(".x").on("click", function(){
    $(this).closest(".wisdom").remove()
})
