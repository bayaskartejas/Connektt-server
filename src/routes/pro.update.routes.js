import express from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware.js';
import { updatePro } from '../controllers/pro.controller.js';
const router = express.Router();

router.put('/update', authenticate, authorizeRole('PROFESSIONAL'), updatePro)


export default router;