var express = require('express');
var router = express.Router();

const bookmodel = require("../db/book");


/* GET home page. */

router.get('/', async function(req, res, next) {
const Allbook = await bookmodel.find()
res.render('index' ,{Allbook});
})

router.post('/create', async function(req, res, next) {
const bookdata = await bookmodel.create({
    name : req.body.name,
    price : req.body.price,
    author : req.body.author
})
// res.render("index" ,{bookdata:bookdata})
res.send("update book")
// console.log(bookdata)
})

router.get("/update/:index",async function(req,res,next){
const index = req.params.index
const currentbook = await bookmodel.findOne({_id:index,})
res.render("update" ,{currentbook})
})

router.post("/update/:index",async function(req,res,next){
    const index = req.params.index

    // const currentbook = await bookmodel.findOne({_id:index})

    // currentbook.name = req.body.name
    // currentbook.price = req.body.price
    // currentbook.author = req.body.author

    // await currentbook.save()
    // res.send("book is update")
   
    await bookmodel.findOneAndUpdate({
        _id:index
    },{
        name:req.body.name,
        price:req.body.price,
        author:req.body.author
    })
    
     res.redirect("/")
})

router.get("/delete/:bookid", async function (req,res,next){
    const bookid = req.params.bookid

await bookmodel.findOneAndDelete()
res.redirect("/") 
})



module.exports = router;

