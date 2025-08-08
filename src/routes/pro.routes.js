import express from 'express';
import {
    getProfessionalsByLocation,
    getProfessionalsByLocationAndCategory,
    getProfessionalsByLocationAndDate,
    getProfessionalsByLocationDateAndCategory
} from '../controllers/pro.controller.js';

const router = express.Router();


router.get('/:location/all', getProfessionalsByLocation);
router.get('/:location/:category', getProfessionalsByLocationAndCategory);
router.get('/:location/:date/all', getProfessionalsByLocationAndDate)
router.get('/:location/:date/:category', getProfessionalsByLocationDateAndCategory)

export default router;