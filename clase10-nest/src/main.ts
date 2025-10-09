import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir más configuraciones a nivel APP.

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Lista blanca -> Solo pasa si está en la lista -> Solo pasa si está declarado
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
