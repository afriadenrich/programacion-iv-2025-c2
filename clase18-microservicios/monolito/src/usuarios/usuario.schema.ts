import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Usuario {
  @Prop()
  nombre: string;
  @Prop()
  correo: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
