import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { YourModel } from "./models/yourModel.js";
import { signupModel } from './models/signupModel.js';
import { userModel }from './models/userModel.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(cors({
  origin:["http://deploy-mern-1whq.vercel.app"],
  methods:["POST","GET"],
  credentials:true
}
));
mongoose.connect('mongodb+srv://Jawad:123@cluster0.pcrerog.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  // Create multer instance
  const upload = multer({ storage: storage });
  
  // Define a Mongoose schema for the image data
  const ImageSchema = new mongoose.Schema({
    imageUrl: String,
  });
  
  // Create a Mongoose model
  const Image = mongoose.model('Image', ImageSchema);
  
  // Handle image upload
  app.post('/upload-image', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }
  
      // Save the image URL to the database
      const newImage = new Image({
        imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
      });
  
      const savedImage = await newImage.save();
  
      res.status(200).json({ imageUrl: savedImage.imageUrl });
    } catch (error) {
      console.error('Error uploading image:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
// ...

// Handle fetching the latest image URL
app.get('/get-image-url', async (req, res) => {
    try {
      const image = await Image.findOne().sort({ _id: -1 });
      res.status(200).json({ imageUrl: image ? image.imageUrl : '' });
    } catch (error) {
      console.error('Error fetching image URL:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  







  





app.post('/add-item', async (req, res) => {
    try {
        const { name, description, category,type,stock,available,buildyear,price,admprice,image } = req.body;
        const newItem = new YourModel({
            name,
            description,
            category,
            type,
            stock,
            available,
            buildyear,
            price,
            admprice,
            image,
        });
     

        console.log("added done by admin");
        const result = await newItem.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/sign-up', async (req, res) => {

        const {firstName,lastName,email,phoneNumber,password } = req.body;
        const signup = new signupModel({
           firstName,
           lastName,
           email,
           phoneNumber,
           password,
        });
     

        console.log("signup done");
        await signup.save();
        
    
});
app.post('/user-data', async (req, res) => {

    const {productName,productDescription,productPrice,productUrl} = req.body;
    const userdata = new userModel({
       productName,
       productDescription,
       productPrice,
       productUrl,
       
    });
 

    console.log("user add done");
    await userdata.save();
    

}); 
app.get('/user-items', async (req, res) => {
    try {
        console.log("fetch done for user");
        const userDetail = await userModel.find();
        res.status(200).json(userDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/get-items', async (req, res) => {
    try {
        console.log("fetch done for admin ");
        const items = await YourModel.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.delete('/delete-product/:id', async (req, res) => {
    try {
      console.log("user delete done");
      const productId = req.params.id;
      const deletedProduct = await userModel.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

app.delete('/delete-item/:id', async (req, res) => {
    try {
        console.log("delete done admin");
        const itemId = req.params.id;
        const deletedItem = await YourModel.findByIdAndDelete(itemId);

        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// index.js
// import express from "express";
// const app = express();
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
// import pracRouter from './routes/Prac.js';






// const url ="mongodb+srv://Jawad:123@cluster0.pcrerog.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(url).then(()=>{
//   console.log("connected to db")
// }).catch((err)=>{
//   console.log("err")
// })




// app.use(cors());
// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}))
// app.use('/prac', pracRouter);
// app.listen(5000,()=>{
//   console.log("server is runng")
// })


