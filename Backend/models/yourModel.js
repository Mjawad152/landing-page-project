import mongoose from "mongoose";

const vintageItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category:String,
    type:String,
    stock:String,
    available:Number,
    buildyear:Number,
    price: Number,
    admprice:Number,
    listingDate: {
        type: Date,
        default: Date.now
    },
    image: {
        type: mongoose.Schema.Types.Mixed,
    },
});

export const YourModel = mongoose.model("YourModel", vintageItemSchema);
