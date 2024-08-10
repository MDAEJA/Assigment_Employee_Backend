
const mongoose = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://mdaejazahmed6692:aejaz@employee.wlhqi.mongodb.net/?retryWrites=true&w=majority&appName=Employee")
    .then(()=>{
        console.log("DATA BASE CONNECTED SUCCESSFULLY!!!")
    })
    .catch((err)=>{
        console.log("GETTING AN ERROR WHILE CONNECTING WITH DATA BASE :",err)
    })
}

module.exports = dbConnection;