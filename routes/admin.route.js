import express from 'express';
import loginValidation from '../validation/admin.validation.js';
import adminController from '../controllers/admin.controller.js';
import upload from '../middleware/uploadFile.js';
import productValidation from '../validation/product.validation.js';
const router = express.Router();

router.post('/', loginValidation, adminController.login)

router.get('/edit/:id', adminController.edit)
router.put('/update/:id', upload.single('imagen'), productValidation, adminController.update)

export default router