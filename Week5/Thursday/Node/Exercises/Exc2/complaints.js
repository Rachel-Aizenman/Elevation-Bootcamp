const complaintTypes = require('./consts');
// console.log(complaintTypes)
const handleComplaint = require('./complaintsHandler')


let complaint1 = {
    text: "Im  not getting enough money",
    type: complaintTypes.finance
}

let complaint2 = {
    text: "My salary hasnt come in yet",
    type: complaintTypes.finance
}

let complaint3 = {
    text: "Im always full of energy",
    type: complaintTypes.emotions
}

// console.log(complaint1)
// console.log(complaint2)
// console.log(complaint3)


handleComplaint.handleComplaint(complaint1)
handleComplaint.handleComplaint(complaint2)
handleComplaint.handleComplaint(complaint3)
