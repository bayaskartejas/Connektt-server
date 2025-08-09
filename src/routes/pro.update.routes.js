import express from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { updateProSchema } from '../validation/schemas.js';
import { updatePro } from '../controllers/pro.controller.js';
const router = express.Router();

router.put('/update', authenticate, authorizeRole('PROFESSIONAL'), validate(updateProSchema), updatePro)


export default router;