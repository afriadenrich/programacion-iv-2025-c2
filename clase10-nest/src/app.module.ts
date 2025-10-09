import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RopaController } from './controllers/ropa/ropa.controller';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LibroModule } from './resources/libro/libro.module';

@Module({
  imports: [UsuarioModule, LibroModule],
  controllers: [AppController, RopaController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
