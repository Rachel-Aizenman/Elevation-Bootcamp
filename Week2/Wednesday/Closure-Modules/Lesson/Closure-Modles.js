// //Spot Check 1

// // const family = function () {
// //     const members = []
// //         const birth = function (name) {
// //         members.push(name)
// //         // birth("tiferet")
// //         console.log(members)

// //     }
// //     return birth
// // }

// // const giveBirth = family()
// // giveBirth("tiffy")
// // giveBirth("michali")
// // giveBirth("sarah")


// //Spot Check 2

// const mathOperations = function () {

//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     const math = {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
//     return math
// }
// const m = mathOperations()
// console.log(m.add(13, 29))
// console.log(m.mult(1.75, 24))

// console.log(m.mult(7, (m.div(36, 6))))

//

// const Module = function () {
//     const function1 = function (name) {
//         console.log("Hey, " + name)
//     }
//     const function2 = function (timeOfDay) {
//         console.log("How is your " + timeOfDay)
//     }
//     const mod = {
//         f1: function1,
//         f2: function2
//     }
//     return mod
// }

// const mdl = Module()// why do we need to call a function before console.logging it?
// console.log(mdl.f1("Tiferet"))
// console.log(mdl.f2("morning"))
// console.log((mdl.f1("Tif") + mdl.f2("morning")))

// Spot Check 3

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Avraham')
usersModule.addUser('Dov')
usersModule.listUsers()
console.log(userModule.users)

//didnt work