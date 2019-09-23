const trees = ["Oak", "Pine", "Palmetto", "Palm", "Willow"]
console.log(trees.length)
let lastIndex = trees[4]
console.log(trees[lastIndex])
console.log(trees[4])
let firstIndex = trees[0]
console.log(trees[firstIndex])
console.log("The first plant is" + " " + [firstIndex] + " " + "the last one is" + " " + [lastIndex])
let companies = ["Google", "Amazon", "Ebay", "Apple"]
console.log(companies)
companies[1] = "Twitter";
console.log(companies[1]);
console.log(companies)
companies.push("Blizzard Entertainment");
console.log(companies)
companies.unshift("Melissa & Doug")
console.log(companies)
let myStuff = ["food", "sleep", "transportation", "computer", "brain"]
console.log(myStuff)
// myStuff.push("food")
// myStuff.unshift("brain")
console.log(myStuff)
companies.push("Fox Entertainment", "Marvel Studios", "Rolex");
let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]
employees.push(...candidates)
console.log(employees)
myStuff.push(...myStuff)
console.log(myStuff)
let spotCheck = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
spotCheck.splice(0, 8)
console.log(spotCheck)
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newgenes = []
genes.splice(2,3)
console.log(genes)
genes.push("CRYZ", "RLF", "AZIN2", "AZIN2")
console.log(genes)
genes.unshift("FXT")
console.log(genes)

