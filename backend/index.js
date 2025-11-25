const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require("dotenv").config({
    path:'./backend/.env'   // env is in backend folder not in root 
});

const mongoURI = process.env.MONGO_URI;


function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err.message));
}

module.exports = connectToMongo;


app.use(express.json());
app.use(cors());


// data base connection with mongodb

// mongoose.connect("mongodb+srv://rajeshk57982_db_user:sandeep0012@cluster0.hoafvxk.mongodb.net/?appName=Cluster0");



//api creation 

app.get("/",(req,res)=>{
    res.send("express app is running");
})

// image storage engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    }
})

const upload = multer({storage:storage})

// creating upload endpoitn for the image 


app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`https://localhost:${port}/images/${req.file.filename}`
    })
})




app.listen(port,(error)=>{
    if(!error) {
         console.log("server running on port "+port);
    } else{
        console.log("error :"+error);
    }
})