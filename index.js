//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";


dotenv.config({
    path: './.env'
});

const app = express();

connectDB();
app.listen(8800,()=>{
    console.log("App is Listening On Port 8800");
})
