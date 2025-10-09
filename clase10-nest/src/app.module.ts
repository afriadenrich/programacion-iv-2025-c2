import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RopaController } from './controllers/ropa/ropa.controller';
import { LibroModule } from './resources/libro/libro.module';

@Module({
  imports: [LibroModule],
  controllers: [AppController, RopaController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
