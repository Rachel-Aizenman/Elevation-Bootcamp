$("button").on("click", function(){
   const input = $("#input")
   $("body").append(`<div>• ${input.val()}</div>`)
   input.val("")

}
)

//incorrect font?
//text box doesnt stay below text