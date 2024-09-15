const express= require("express");
const app= express();

require("dotenv").config();
const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");

//mount
app.use("/api/v1", blog);

app.listen(PORT, ()=>{
    console.log(`App is started at port no ${PORT}`);
})
const connectWithDb = require("./config/database");
connectWithDb();



app.get("/", (req,res)=>{
    res.send(`<h1> this is home</h1>`)
})