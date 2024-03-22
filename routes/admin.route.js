import express from 'express';
import loginValidation from '../validation/admin.validation.js';
import adminController from '../controllers/admin.controller.js';
import upload from '../middleware/uploadFile.js';
import productValidation from '../validation/product.validation.js';
import isAuthenticated from '../middleware/auth.js'
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', isAuthenticated, adminController.loginValidation)
router.get('/login', adminController.login)
router.post('/', loginValidation, adminController.loginValidation)
router.get("/logout", adminController.logout)

router.get('/edit/:id', isAuthenticated, productController.edit)
router.put('/update/:id', isAuthenticated, upload.single('image'), productValidation, productController.update)

router.delete('/delete/:id', isAuthenticated, productController.delete)

router.get('/create', isAuthenticated, productController.newProduct)
router.post('/create', isAuthenticated, upload.single('image'), productValidation, productController.create)

router.get('/search', isAuthenticated, productController.search)

export default router