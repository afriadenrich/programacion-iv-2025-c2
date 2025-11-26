import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './usuario.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
    ClientsModule.registerAsync([
      {
        name: 'MICROSERVICIO',
        useFactory: () => ({
          transport: Transport.TCP,
          options: {
            port: 3001,
            host: '0.0.0.0',
          },
        }),
      },
    ]),
  ],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
