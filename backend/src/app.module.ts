import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import envValidationSchema from './config/validation.config';
import { DatabaseModule } from './infrastructure/database/database.module';
import dbConfig from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
      validationSchema: envValidationSchema,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
