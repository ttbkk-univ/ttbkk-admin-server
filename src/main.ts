import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  INestApplication,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import bodyParser from 'body-parser';
import { ClassValidatorError } from './errors/common/common.error';
import _ from 'lodash';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  // console.log(process.memoryUsage());
  const app: INestApplication = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.enableCors();
  app.use(bodyParser.json({ limit: '100mb' })); //body 의 크기 설정
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); //url의 크기 설정
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]): BadRequestException =>
        new BadRequestException(
          _.assign(ClassValidatorError, {
            description: errors
              .map((error: ValidationError) => `${Object.values(error.constraints)[0]}`)
              .join(', '),
          }),
        ),
    }),
  );
  await app.listen(7000);
}

bootstrap().then(() => {
  console.info('Started Server : 7000');
});
