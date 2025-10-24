import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConsoleLogger } from '@nestjs/common';
import { MyLogger } from './logger/logger';

async function bootstrap() {
  // Deshabilitar el logger
  // const app = await NestFactory.create(AppModule, {
  //   logger: false,
  // });

  const app = await NestFactory.create(AppModule, {
    // logger: ['verbose', 'debug', 'log', 'warn', 'error', 'fatal'],
    // logger: new ConsoleLogger({
    //   colors: false,
    // }),
    // logger: new ConsoleLogger({
    //   compact: true,
    //   timestamp: true,
    // }),
    logger: new MyLogger(),
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
