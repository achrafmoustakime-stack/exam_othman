const dotenv=require("dotenv");
dotenv.config();

const mongoss = require("mongoose");

function connectDB(){
    try {
        mongoss.connect(process.env.MONGO_URI);
        console.log("db connected");

    }
    catch (error)
    {
        console.log(error);

    }
}
module.exports = connectDB;
    
