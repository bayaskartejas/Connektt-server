import prisma from '../config/db.js';
import jwt from 'jsonwebtoken';
import { generateOTP, verifyOTP } from '../utils/otp.util.js';

const JWT_SECRET = process.env.JWT_SECRET;

export async function sendOTP(req, res) {
  const { mobile } = req.body;
  if (!mobile) return res.status(400).json({ error: 'Mobile number is required' });

  const otp = generateOTP(mobile);
  console.log(`OTP for ${mobile}: ${otp}`);

  return res.json({ message: 'OTP sent successfully (check console in prototype)' });
}

export async function verifyOTPHandler(req, res) {
  const { mobile, otp, role } = req.body;

  if (!mobile || !otp) {
    return res.status(400).json({ error: 'Mobile and OTP are required' });
  }

  const isValid = verifyOTP(mobile, otp);
  if (!isValid) return res.status(401).json({ error: 'Invalid or expired OTP' });

  let user = await prisma.user.findUnique({ where: { mobile } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        mobile,
        role: role === 'PROFESSIONAL' ? 'PROFESSIONAL' : 'CUSTOMER',
      },
    });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '7d',
  });

  return res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      mobile: user.mobile,
      role: user.role,
    },
  });
}

