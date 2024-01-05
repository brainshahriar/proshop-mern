import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @acees Public
const getAll = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  return res.json(product);
});

// @desc Fetch single products
// @route GET /api/products
// @acees Public
const getSingle = asyncHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params.id);
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getAll, getSingle };
