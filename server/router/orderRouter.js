import express from 'express';
import { createOrder, getOrder } from '../controller/orderController.js';
import authMiddleWare from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleWare, createOrder);
router.get('/:id', authMiddleWare, getOrder);

export default router;