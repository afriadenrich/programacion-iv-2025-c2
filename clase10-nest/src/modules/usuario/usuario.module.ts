import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/modules/usuario/usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
