import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js";

// @desc    Fetch all Product
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc    Fetch Single Product By Id
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not Found');
    }
});

export {getProductById, getProducts}