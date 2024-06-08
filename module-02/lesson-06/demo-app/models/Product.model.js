const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: "images/default-product.png",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
