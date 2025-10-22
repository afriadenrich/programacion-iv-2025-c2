import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [PublicacionesModule, AuthModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
