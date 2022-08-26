import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalInterceptor } from './common/intercetors/global.interceptor';
import { ErrorCaptureModule } from '@src/modules/common/error-capture/error-capture.module';
import { DatabaseModule } from '@src/modules/database/database.module';
import { HealthCheckModule } from '@src/modules/common/healthcheck/healthcheck.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DatabaseModule,
    ErrorCaptureModule,
    HealthCheckModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: GlobalInterceptor },
  ],
})
export class AppModule {}
