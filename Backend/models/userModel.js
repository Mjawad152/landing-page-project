import mongoose from "mongoose";


const UserProductsSchema = new mongoose.Schema({
    productName:String,
    productDescription:String,
    productPrice:Number,
    productUrl:String,
});
export const userModel = mongoose.model("UserModel", UserProductsSchema);