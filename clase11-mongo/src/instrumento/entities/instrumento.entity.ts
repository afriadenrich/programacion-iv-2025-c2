import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { type ObjectId } from 'mongoose';

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
  sondios: { nombre: string; frecuencia: number };

  @Prop({ default: new Date() })
  created_at: Date;
}

export const InstrumentoSchema = SchemaFactory.createForClass(Instrumento);
