import express from 'express';
import { addProduct, updateProduct, deleteProduct, getProductById, getProducts, createProductReview, deleteReview, getProductReviews } from '../controller/productController.js';
import Product from '../models/Product.js';
const router = express.Router();

router.get('/', getProducts)
router.post('/', addProduct);
router.get('/:id', getProductById);
router.put('/review', createProductReview);
router.get('/review', getProductReviews);
router.delete('/review', deleteReview);
router.put('/:id', getProduct, updateProduct);
router.delete('/:id', getProduct, deleteProduct);

async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}



export default router;
