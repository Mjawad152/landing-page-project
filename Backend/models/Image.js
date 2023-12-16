// models/Image.js

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  // You can include additional fields as needed
  // For example, a timestamp for when the image was uploaded
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
