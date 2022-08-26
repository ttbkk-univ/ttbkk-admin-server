import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorCaptureService } from '@src/modules/common/error-capture/error-capture.service';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  constructor(private readonly errorCaptureService: ErrorCaptureService) {}
  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    return next.handle().pipe(
      tap({
        error: async (error: any) => {
          if (error.response?.code && !error.response.isUnexpected) return;
          return this.errorCaptureService.captureError({ error, context });
        },
      }),
    );
  }
}
