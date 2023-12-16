import { PractiseModel } from "../models/practiseModel.js"


export const getPrac = (req, res) => {
  console.log("get API reach");
};

export const postPrac = async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   console.log("post API reach");
const { firstName, lastName, mobNumber } = req.body;

  const newData = new PractiseModel({
    firstName, 
    lastName,
    mobNumber,
  });

  try {
    await newData.save();
    res.json(newData); 
  } catch (err) {
    console.log("not saved");
  }
};
