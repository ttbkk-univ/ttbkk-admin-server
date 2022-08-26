import { Global, Module } from '@nestjs/common';
import { ErrorCaptureService } from './error-capture.service';

@Global()
@Module({
  imports: [],
  providers: [
    ErrorCaptureService,
  ],
  exports: [ErrorCaptureService],
})
export class ErrorCaptureModule {}
