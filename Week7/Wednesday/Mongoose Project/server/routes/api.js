const express = require('express')
const router = express.Router()
const Expense = require('../model/Expense')
const expenseData = require('../model/expenses.json')
const moment = require('moment')
router.get('/expense', function(req, res){
    Expense.find({}, function(err, expense){
       res.send(expense)
    })
})

expenseData.forEach(e => {
        name = e.item,
        amount = e.amount,
        date = e.date,
        group = e.group

    let expense = new Expense({
        name: name,
        amount: amount,
        date: date,
        group: group

    })
    expense.save()
    }

    
);

router.get('/expenses', function(req, res){
    Expense.find({}).sort({date: -1}).exec(function(err, expense){
        res.send(expense)}
)})

router.post('/new', function(req, res){
    let name = req.body.name
    let amount = req.body.amount
    let date = req.body.date ? moment(req.body.date).format('LLLL') : moment(new Date()).format('LLLL')
    let group = req.body.group

    let expense = new Expense({
        name: name,
        amount: amount,
        date: date,
        group: group
})
  expense.save().then(function(expense){  
    //   console.log(expense) 
      res.send(expense)
  })
})

router.put('/update', function(req, res){
    Expense.find({}, function(err, expense){
        let group1 = req.body.group1
        let group2 = req.body.group2
        Expense.findOneAndUpdate(
            {group: group1},
             {group: group2})
        const group = expenseData.filter(e => e.group === group1)
        res.send("You've moved " +  group[0].item + " to " + group2)

    })

})

router.get('/expenses/:group', function(req, res){
    let group = req.params.group
    let total = req.query.total
    let d1 = req.query.d1
    let d2 = req.query.d2 || moment(new Date()).format('LLLL')
    if(total){
        Expense.aggregate([
            {$match: {group: group}},
            {$group: {_id: null, totalAmount: {$sum: "$amount"}}}
        ]).exec 
            (function(err, expense){
                res.send(expense)
            })
    }    
    if(d1){
        Expense.find({
            $and: [
                {date: {$ls: d2}},
                {date: {$gt: d1}}
            ]
        }).sort(-1).exec(function(err, expense){
            res.send(expense)
        })
    } else {
    Expense.find({
        group: group
    }, function(err, expense){
        res.send(expense)
    })}

})


module.exports = router