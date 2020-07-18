const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
    taxBracket:{
        type: Number
    }
    dept:{
        name: String,
        
    }
})
