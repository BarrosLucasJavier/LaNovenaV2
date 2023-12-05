import express from 'express';
import homeController from '../controllers/index.controller.js';
import loginValidation from '../validation/admin.validation.js';
const router = express.Router();

router.get('/', homeController.home);

router.post('/admin', loginValidation, homeController.login)

export default router