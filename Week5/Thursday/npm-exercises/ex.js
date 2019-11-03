//Exercise 1

var validator = require('validator');
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"

console.log(validator.blacklist(text, blacklist));

//Exercise 2
var faker = require('faker');

const makeHuman = function (number) {
    const name = faker.name.findName();
    const image = faker.image.avatar();
    const company = faker.company.companyName();
    for (i = 0; i < number; i++) {
        let human = { "name": name, "image": image, "company": company }
      console.log(human)
    }
}

makeHuman(5)