import mongoose from "mongoose";

const practiseSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobNumber: Number
})
export const PractiseModel = mongoose.model("PractiseModel",practiseSchema);

