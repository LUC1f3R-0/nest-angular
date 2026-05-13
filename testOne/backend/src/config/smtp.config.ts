import { registerAs } from '@nestjs/config';

const smtpConfig = registerAs('smtp', () => ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASS,
}));

export default smtpConfig;
