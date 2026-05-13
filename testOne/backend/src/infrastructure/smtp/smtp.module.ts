import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createSmtpTransporter, SMTP_TRANSPORTER } from './nodemailer.config';
import { SmtpStatusService } from './connection.config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: SMTP_TRANSPORTER,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        createSmtpTransporter(configService),
    },
    SmtpStatusService,
  ],
  exports: [SMTP_TRANSPORTER],
})
export class SmtpModule {}
