const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    jobTitle:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    bio:{
        type:String
    },
    joinedDate:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        default:new Date()
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);