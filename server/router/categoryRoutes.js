import express from 'express';
import { addCategory, updateCategory, deleteCategory, getCategoryById, getCategorys } from '../controller/categoryController.js';
const router = express.Router();

router.get('/', getCategorys)
router.post('/', addCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
