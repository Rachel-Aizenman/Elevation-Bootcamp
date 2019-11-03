//Spot Check 1
let userStorage = {
    darkmode: true, 
    showSideNav: false, 
    defultResultCount: 9, 
    latestMarks: {
        sectionA: 92, 
        sectionB: 11
    },
    cart:[
        {id: 3112, count: 2},
        {id: 812, count: 16}
    ]
}


localStorage.userStorage = JSON.stringify(userStorage)
let data = JSON.parse(localStorage.userStorage)
console.log(data.cart[data.cart.length - 1].count)

//Spot Check 2
JSON.parse(localStorage.userStorage || "[]")
data.cart.forEach(c => console.log(c))

data.forEach(d => console.log(d.text))