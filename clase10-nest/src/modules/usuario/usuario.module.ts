import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
// OJO! Siempre importaciones relativas!!!

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
