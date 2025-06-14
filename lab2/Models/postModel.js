const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
  },
});
const product = mongoose.model("Product", productSchema);
module.exports = product;
