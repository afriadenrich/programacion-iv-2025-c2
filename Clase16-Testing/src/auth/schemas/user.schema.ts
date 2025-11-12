import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { CreateBookDto } from 'src/book/dto/create-book.dto';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
