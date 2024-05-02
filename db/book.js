const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
name:String,
author:String,
price:String,
})

module.exports = mongoose.model("book", bookSchema)



