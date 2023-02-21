import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionHandler } from './common/exception/HttpExceptionHandler.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionHandler());
  app.useGlobalPipes(new ValidationPipe({ transform: true, }),);
  await app.listen(3000);
}
bootstrap();
