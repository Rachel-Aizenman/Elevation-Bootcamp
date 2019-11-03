const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

if (reservations[name]) {
  reservation = reservations[name].claimed
  if (reservation === false) {
    alert("Welcome, " + name)
  } else if (reservation === true) {
    alert("Hmm, someone already claimed this reservation")
  }
} else {
  alert("You have no reservation")
}


