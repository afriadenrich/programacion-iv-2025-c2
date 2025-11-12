import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Es el precio',
    minimum: 0,
  })
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  @ApiProperty({
    enum: Category,
  })
  readonly category: Category;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
