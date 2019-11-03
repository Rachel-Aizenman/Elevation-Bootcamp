// var block = document.createElement("div");
// $(body).append(block); 

// $("h1").add("div").addClass("box");


var div = document.createElement("div");
$(div).addClass("box")
document.body.appendChild(div);



var div = document.createElement("div");
$(div).addClass("box")
document.body.appendChild(div);
// 
// if (div.mouseenter) {
//     $(div).css("background-color", "8e44ad")
//     } else {
//         $(div).css("background-color", "red")
    // }

if($(".box").mouseleave){
    $(div).css("background-color", "8e44ad")
} else {  $(div).css("background-color", "red")

}

$(".box").mouseenter(function () {
    $(div).css("background-color", "8e44ad")
})

$(".box").mouseleave(function () {
    $(div).css("background-color", "red")
})

// $(body).append('div class="box"></div')

// .click(function(){
//     ($(this)

// $(".box").hover(function(){
    //     $(this).css("background-color", "blue")}