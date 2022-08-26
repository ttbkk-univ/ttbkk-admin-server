import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('healthcheck')
export class HealthCheckController {
  @Get()
  async healthcheck(@Res() res: Response): Promise<void> {
    res.status(HttpStatus.OK).send('OK');
  }
}

