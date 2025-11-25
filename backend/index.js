const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");




// require("dotenv").config({
//     path:'./backend/.env'   // env is in backend folder not in root 
// });

// const mongoURI = process.env.MONGO_URI;


// function connectToMongo() {
//     mongoose.connect(mongoURI)
//     .then(() => console.log("MongoDB Connected Successfully"))
//     .catch(err => console.log(err.message));
// }

// module.exports = connectToMongo;





app.use(express.json());
app.use(cors());


// data base connection with mongodb

mongoose.connect(
  "mongodb+srv://rajeshk57982_db_user:sandeep0012@cluster0.hoafvxk.mongodb.net/shopDB?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log(err));



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



// ---- STATIC IMAGE FOLDER ----
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`

    })
})


// schema for craeting products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true
    },
    
    name: {
        type: String,
        required: true
    },

    new_price: {
        type: Number,
        required: true
    },

    old_price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String, // URL of the uploaded image
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },
    available:{
        type:Boolean,
        default:true
    }

})

// endpoint for  adding product in datatbase
app.post("/addproduct", async (req, res) => {
    try {
        // 1️⃣ Get all products
        let products = await Product.find({});

        // 2️⃣ Calculate custom ID
        let newId;
        if (products.length > 0) {
            let lastProduct = products[products.length - 1];
            newId = lastProduct.id + 1;
        } else {
            newId = 1;
        }

        // 3️⃣ Take the other fields from request
        const { name, new_price, old_price, description, category, image } = req.body;

        // 4️⃣ Create product with custom ID
        const product = new Product({
            id: newId,          // <-- use calculated ID
            name,
            new_price,
            old_price,
            description,
            category,
            image,
            date: Date.now()
        });

        // 5️⃣ Save product
        await product.save();

        console.log(product);
        console.log("Saved");

        // 6️⃣ Response
        res.json({
            success: true,
            message: "Product added successfully!",
            product
        });

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
});




app.listen(port,(error)=>{
    if(!error) {
         console.log("server running on port "+port);
    } else{
        console.log("error :"+error);
    }
})