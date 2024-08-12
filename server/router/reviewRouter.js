import express from 'express';
const router = express.Router();
import {
    createReview,
    updateReview,
    getReviewById,
    getReviews,
    deleteReview,
    getProductReview
} from '../controller/reviewController.js';
import authMiddleWare from '../middleware/authMiddleware.js';

// Create a new review
router.post('/', authMiddleWare ,createReview);

// get Product review
router.get('/product/:productId', getProductReview);

// Get all reviews
router.get('/', authMiddleWare , getReviews);

// Get a single review by ID
router.get('/:id', authMiddleWare , getReviewById);

// Update a review by ID
router.put('/:id', authMiddleWare , updateReview);

// Delete a review by ID
router.delete('/:id', authMiddleWare , deleteReview);

export default router;
