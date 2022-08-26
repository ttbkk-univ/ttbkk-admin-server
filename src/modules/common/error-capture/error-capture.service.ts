import { Injectable, OnModuleInit } from '@nestjs/common';

import { ModuleRef } from '@nestjs/core';
import { SenderService } from '@src/common/interface/sender-service.interface';
import { ErrorNotificationInput } from '@src/modules/common/error-capture/interface/error-capture.interface';

@Injectable()
export class ErrorCaptureService implements OnModuleInit {
  private errorSenderServices: SenderService[];

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.errorSenderServices = [
    ];
  }

  async captureError(data: ErrorNotificationInput): Promise<void> {
    await Promise.all(
      this.errorSenderServices.map((errorSenderService: SenderService) =>
        errorSenderService.send(data),
      ),
    );
  }
}
