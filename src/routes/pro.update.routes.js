import express from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { updateProSchema, updateServiceSchema } from '../validation/schemas.js';
import { updatePro, updateService } from '../controllers/pro.controller.js';
const router = express.Router();

router.put('/update', authenticate, authorizeRole('PROFESSIONAL'), validate(updateProSchema), updatePro)
router.put('/service/update', authenticate, authorizeRole('PROFESSIONAL'), validate(updateServiceSchema), updateService)

export default router;