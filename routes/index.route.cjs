import express from 'express';
import home from '../controllers/index.controller.cjs';
const router = express.Router();

router.get('/', home);

export default router