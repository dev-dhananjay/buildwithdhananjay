import 'server-only';

/**
 * Server-only environment variable access helper.
 * Ensures sensitive environment variables are only accessed in server-side context.
 */
export const serverEnv = {
  MONGODB_URI: process.env.MONGODB_URI ?? '',
  AUTH_SECRET: process.env.AUTH_SECRET ?? '',
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID ?? '',
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET ?? '',
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET ?? '',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
} as const;

export default serverEnv;
