const complaintTypes = require('./consts');
// console.log(complaintTypes)

const handleComplaint = function (complaint) {
    if (complaint.type == complaintTypes.finance) {
        console.log("Money doesn't grow on trees, you know.")
    }
    if (complaint.type == complaintTypes.weather) {
        console.log("It is the way of nature. Not much to be done.")
    }
    if (complaint.type == complaintTypes.emotions) {
        console.log("It'll pass, as all things do, with time.")
    }
}

module.exports.handleComplaint = handleComplaint;
console.log(module.exports.handleComplaint)
