const otpStore = new Map();

export function generateOTP(mobile) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(mobile, { otp, expiresAt: Date.now() + 2 * 60 * 1000 });
  return otp;
}

export function verifyOTP(mobile, inputOtp) {
  const record = otpStore.get(mobile);
  if (!record) return false;
  const isValid = record.otp === inputOtp && Date.now() < record.expiresAt;
  if (isValid) otpStore.delete(mobile);
  return isValid;
}