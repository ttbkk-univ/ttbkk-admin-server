import { ExecutionContext } from '@nestjs/common';

export interface ErrorWithContextInput {
  readonly error: any;
  readonly context: ExecutionContext;
}

export interface ErrorWithHandlerInput {
  readonly error: any;
  readonly handler: string;
}

export interface ErrorNotificationInput {
  readonly error: any;
  readonly handler?: string;
  readonly context?: ExecutionContext;
}
