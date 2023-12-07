import express from 'express';
import loginValidation from '../validation/admin.validation.js';
import adminController from '../controllers/admin.controller.js';
const router = express.Router();

router.post('/', loginValidation, adminController.login)

router.get('/edit/:id', adminController.edit)

export default router