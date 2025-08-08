import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import {
    getProfessionalsByLocation,
    getProfessionalsByLocationAndCategory
} from '../controllers/pro.controller.js';

const router = express.Router();

router.get('/:location/all', authenticate, getProfessionalsByLocation);
router.get('/:location/:category', authenticate, getProfessionalsByLocationAndCategory);

export default router;
