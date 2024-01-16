//routes for products. We can all routes like app.get('/api/products .... which can get complicated and long for many different routes. This way we can have seperate files for routes.

import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

// Before Controller implementation, asyncHandler and ProductModel Imported here

// router.get('/', asyncHandler( async (req, res) => {
//     getProducts();
// }));

router.route('/').get(getProducts); //After controller implementation

// Before Controller implementation, asyncHandler and ProductModel Imported here

// router.get('/:id', asyncHandler( async (req, res) => {
//     getProductById();
// }));

router.route('/:id').get(getProductById); //After controller implementation

export default router;