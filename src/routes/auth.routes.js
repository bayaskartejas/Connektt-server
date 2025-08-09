import express from 'express';
import { sendOTP, verifyOTPHandler } from '../controllers/auth.controller.js';
import { validate } from "../middleware/validate.middleware.js"
import { sendOtpSchema, verifyOtpSchema } from '../validation/schemas.js';

const router = express.Router();

router.post('/send-otp', validate(sendOtpSchema), sendOTP);
router.post('/verify-otp', validate(verifyOtpSchema), verifyOTPHandler);

export default router;