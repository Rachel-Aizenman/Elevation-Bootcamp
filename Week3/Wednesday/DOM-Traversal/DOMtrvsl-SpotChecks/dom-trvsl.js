//Spot Check 1
$("button").click(function(){
    console.log($(this).closest("div").find("span").text())
})

//Spot Check 2
$("button").click(function(){
    console.log($(".container").find("p").text())
})