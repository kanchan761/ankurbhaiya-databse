const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0/backup").then(()=>{
    console.log("db connceted")
})

