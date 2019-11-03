const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

// const CheckRes = document.getElementById("button").onclick 

const CheckRes = function () {
  const value = document.getElementById("myText").value
  console.log(value)
  if (reservations[value]) {
    reservationStatus = reservations[value].claimed
    if (reservationStatus === false) {
      alert("Welcome, " + value)
    } else if (reservationStatus === true) {
      alert("Hmm, someone already claimed this reservation")
    }
  } else {
    console.log("You have no reservation")
  }

}
