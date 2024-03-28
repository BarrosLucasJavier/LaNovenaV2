import express from 'express';
import aboutController from '../controllers/aboutUs.controller.js';

const router = express.Router();

router.get('/', aboutController.home);

export default router;