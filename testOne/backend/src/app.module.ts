import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envValidationSchema from './config/validation.config';
import { DatabaseModule } from './infrastructure/database/database.module';
import dbConfig from './config/db.config';
import smtpConfig from './config/smtp.config';
import appConfig from './config/app.config';
import { DatabaseStatusService } from './infrastructure/database/connection.config';
import { SmtpStatusService } from './infrastructure/smtp/connection.config';
import { SmtpModule } from './infrastructure/smtp/smtp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, smtpConfig],
      validationSchema: envValidationSchema,
    }),
    DatabaseModule,
    SmtpModule,
  ],
  providers: [DatabaseStatusService, SmtpStatusService],
})
export class AppModule {}
