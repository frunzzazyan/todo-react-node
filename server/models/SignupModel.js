const { equal } = require("joi")
const mongoose = require("mongoose")

const SignUpSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        unique : true,
        type : String,
        required : true
    },
    age : {
        type : Number,
        min: 18,
        max: 100,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("signup", SignUpSchema)