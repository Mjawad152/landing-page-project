import mongoose from "mongoose";

const vintageSignSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    password: String,
});

export const signupModel = mongoose.model("SignupModel", vintageSignSchema);
