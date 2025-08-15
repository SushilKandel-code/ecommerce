import express from "express";
import bodyParser from "body-parser";
import {connectDB} from "./config/db.js";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
    res.send("Welcome");
});

app.listen(port, async ()=>{
    await connectDB();
    console.log("Server is starting on port ", port);
});
