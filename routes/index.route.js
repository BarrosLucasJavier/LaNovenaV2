import express from 'express';
import homeController from '../controllers/index.controller.js';

const router = express.Router();

router.get('/', homeController.home);

export default router