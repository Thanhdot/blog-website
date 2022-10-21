const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    publishedDate:{
        type: String
    },
    price:{
        type: Number
    }

})

let Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = { Shoe };