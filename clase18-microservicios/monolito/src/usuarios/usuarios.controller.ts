import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.schema';
import { Model } from 'mongoose';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    @Inject('MICROSERVICIO') private client: ClientProxy,
    @InjectModel(Usuario.name) private UsuarioModel: Model<Usuario>,
  ) {}

  @Post('/')
  async crearUsuario(@Body() usuarioDto: { nombre: string; correo: string }) {
    /*const respuesta =*/ await this.UsuarioModel.create(usuarioDto);

    const pattern = { cmd: 'send_mail' };
    const payload = usuarioDto;

    return this.client.send(pattern, payload);
  }
}
