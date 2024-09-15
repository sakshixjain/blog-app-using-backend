const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb=()=>{
    mongoose.connect('mongodb://localhost:27017/BlogAppDatabase',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("db is connected successfully"))
    .catch((error)=>{
        console.log("db ka connection failed");
    console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;