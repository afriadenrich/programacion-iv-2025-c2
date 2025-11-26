import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { type ObjectId } from 'mongoose';
import { Sonido } from '../dto/create-instrumento.dto';

@Schema()
export class Instrumento {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: ObjectId;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  precio: number;

  @Prop([String])
  partituras: string[];

  @Prop({ type: mongoose.Schema.Types.Mixed })
  sonidos: Sonido;

  @Prop({ default: new Date() })
  created_at: Date;
}

export const InstrumentoSchema = SchemaFactory.createForClass(Instrumento);
