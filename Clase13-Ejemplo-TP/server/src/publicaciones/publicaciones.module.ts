import { Module } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { ComentariosController } from './comentarios.controller';

@Module({
  controllers: [PublicacionesController, ComentariosController],
  providers: [PublicacionesService],
})
export class PublicacionesModule {}
