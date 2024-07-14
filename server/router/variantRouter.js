import express from 'express';

import { postRequest, getAll, patchRequest, putRequest, deleteRequest, getOne } from '../controller/commonController.js';
import Variant from '../models/Variant.js';
const router = express.Router();

router.post('/', postRequest(Variant, 'Variant'));
router.get('/', getAll(Variant, 'Variant'));
router.get('/:type', getAll(Variant, 'Variant'));
router.get('/:id', getOne(Variant, 'Variant'));
router.patch('/:id', patchRequest(Variant, 'Variant'));
router.delete('/:id', deleteRequest(Variant, 'Variant'));

export default router;