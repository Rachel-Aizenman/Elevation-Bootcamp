$("button").click(function () {
    const input = $("#input")
    $("body").append(`<div id="newtext"> • ${input.val()}</div>`)
    input.val("")
    $("#newtext").click(function(){
        $(this).remove()
    })
}
)

