import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';

@Schema()
export class Log {
  @Prop()
  correo: string;

  @Prop({ default: now() })
  fechaDeEnvio: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
