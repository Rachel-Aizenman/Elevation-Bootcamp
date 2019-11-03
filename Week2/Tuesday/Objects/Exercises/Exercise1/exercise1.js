let p1 = {
    name: "Jane",
    age: 21,
    city: "LA"
}
let p2 = {
    name: "Robert",
    age: 21,
    city: "NY"
}


if(p1.age == p2.age) {
    if(p1.city == p2.city) {
      console.log("Jill wanted to date Robert")
    }
    else {
       console.log("Jill wanted to date Robert, but couldn't")
    }
}
else {
    console.log("eh")
}