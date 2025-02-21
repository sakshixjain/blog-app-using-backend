const express= require("express");
const cors = require("cors");
const app= express();

require("dotenv").config();
const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
app.use(cors({
    origin: '*', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true, // Allow cookies (if needed)
}));
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