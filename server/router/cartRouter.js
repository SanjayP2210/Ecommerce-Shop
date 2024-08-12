import express from 'express';
import { getCart, addToCart, removeFromCart } from '../controller/cartController.js';
import authMiddleWare from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleWare, getCart);
router.post('/add-to-cart', authMiddleWare, addToCart);
router.delete('/remove-from-cart/:productId', authMiddleWare, removeFromCart);

export default router;