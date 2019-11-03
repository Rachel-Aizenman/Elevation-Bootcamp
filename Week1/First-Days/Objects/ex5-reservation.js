const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

reservation = reservations[name].claimed
console.log(reservation)

if (name === reservation[name]) {
    if (reservation === false)
        alert("Welcome, " + name)
} else {(reservation === true)
    alert("Hmm, someone already claimed this reservation")
} else {
    alert("You have no reservation")
}

