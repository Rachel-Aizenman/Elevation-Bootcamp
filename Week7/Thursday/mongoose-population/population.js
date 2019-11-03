const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/games', {useNewUrlParser: true})



const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] 
  })

const reviewSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book'},
    reveiwText: String,
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'}
})

const criticSchema = new Schema({
    name: String, 
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
})


const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


let b1 = new Book({
    title: "Name of the Wind",
    author: " Patrick Rothfus",
    reviews: []
})

let c1 = new Critic({
    name: "William Jffery",
    reviews: []
})

let r1 = new Review({
    book: b1,
    reviewText: "Excellent Book",
    critic: c1,
})

// console.log(r1)

b1.reviews.push(r1)
c1.reviews.push(r1)

r1.save()
b1.save()
c1.save()


// b1.save().then(function() {
//     c1.save().then(function(){
//         r1.save().then(function(){
//             console.log("done")
//         })

//     })

// })

// Book.find({}, function(err, books){
//     // console.log(books)
// })

// Review.find({}, function(err, reviews){
//     // console.log(reviews)
// })

// Book.find({})
//     .populate("reviews")
//     .exec(function (err, book) {
//         console.log(book[0].reviews)
//     })

// Book.findOne({}).populate({
//     path: 'reviews', 
//     populate: {
//         path: 'critic'
//     }
// }).exec(function (err, book){
//     console.log(book.reviews)
// })

// Review.find({}, function(err, reviews){
//     console.log(reviews)
// })

// Review.find({})
// .populate('book critic')
//     .exec(function(err, reviews){
//         console.log(reviews)
//     })

// Critic.findOne({}, function(err, critic){
//     critic.populate('reviews', function(){
//         console.log(critic.reviews)
//     })
// })