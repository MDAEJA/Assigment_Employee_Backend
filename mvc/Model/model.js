const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true,
    }
},{timestamps:true})

const employeeModel = mongoose.model("employee",employeeSchema);

module.exports = employeeModel;