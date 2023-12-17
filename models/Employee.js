const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    companyName: String,
    companyMotto: String,
    companyEst: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    avatar:String,
    jobTitle: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: Number,
    bio: String,
    joinedDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date()
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);