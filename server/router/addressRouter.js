import express from 'express';
import { addAddress, getAddress, getAddressById, updateAddress, deleteAddress } from '../controller/addressController.js';
import authMiddleWare from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/',  addAddress);
router.get('/',  getAddress);
router.get('/:id',  getAddressById);
router.patch('/:id',  updateAddress);
router.delete('/:id',  deleteAddress);

export default router;