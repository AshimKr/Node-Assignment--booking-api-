import express from "express";
import { route } from "./route.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ashim:12345@cluster0.9imsbfg.mongodb.net/?retryWrites=true',{
    useNewUrlParser:true
})
.then((val)=>{console.log('Database connected')})
.catch((err)=>{console.log("error on database", err)})

app.use('/',route)


app.listen(4000,()=>{
    console.log('running on port 4000');
})