import express from 'express';
import home from '../controllers/index.controller.js';
const router = express.Router();

router.get('/', home);

export default router