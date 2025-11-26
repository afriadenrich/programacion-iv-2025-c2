import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
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
    ClientsModule.registerAsync([
      {
        name: 'GRPC',
        useFactory: () => ({
          transport: Transport.GRPC,
          options: {
            package: 'ejemplo',
            protoPath: 'proto/ejemplo.proto',
          },
        }),
      },
    ]),
    UsuariosModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
})
export class AppModule {}
