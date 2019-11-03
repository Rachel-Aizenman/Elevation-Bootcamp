$("button").click(function () {
    $("input").val("")
})

$("button").click(function () {
    if ($("#name").val().length < 3) {
        alert("Name entry is invalid")
    }
})

$("button").click(function(){
    
    if($("#salary").val() < 10000){
        alert("Salary entry is invalid")
    }
})

$("button").click(function () {
    if ($("#birthday").val() == ("")) {
        alert("Birthday entry is invalid")
    }
})

$("button").click(function () {
    if ($("#phone").val().length < 10) {
        alert("Phone entry is invalid")
    }
})




    // const CheckRes = function () {
    // const value = document.getElementById("myText").value
    // console.log(value)
    // if (reservations[value]) {
    //     reservationStatus = reservations[value].claimed
    //     if (reservationStatus === false) {
    //         alert("Welcome, " + value)
    //     } else if (reservationStatus === true) {
    //         alert("Hmm, someone already claimed this reservation")
    //     }
    // } else {
    //     console.log("You have no reservation")
    // }

// }