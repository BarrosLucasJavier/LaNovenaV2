import express from 'express';
import loginValidation from '../validation/admin.validation.js';
import adminController from '../controllers/admin.controller.js';
import upload from '../middleware/uploadFile.js';
import productValidation from '../validation/product.validation.js';
import isAuthenticated from '../middleware/auth.js'

const router = express.Router();

router.get('/', isAuthenticated, adminController.loginValidation)
router.get('/login', adminController.login)
router.post('/', loginValidation, adminController.loginValidation)
router.get("/logout", adminController.logout)

router.get('/edit/:id', isAuthenticated, adminController.edit)
router.put('/update/:id', isAuthenticated, upload.single('imagen'), productValidation, adminController.update)

router.delete('/delete/:id', isAuthenticated, adminController.delete)

router.get('/create', isAuthenticated, adminController.newProduct)
router.post('/create', isAuthenticated, upload.single('imagen'), productValidation, adminController.create)

router.get('/search', isAuthenticated, adminController.search)

export default router