const config = require("./keys");
const mongoose = require("mongoose");


module.exports = async () => {
    try {
        await mongoose.connect(config.mongoURI);
        console.log(`connected to db...`);
    } catch (error) {
        console.log(error);
        console.log("db connection failed...");
    }
}