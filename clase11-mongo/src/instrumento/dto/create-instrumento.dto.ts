import {
  IsArray,
  IsDefined,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateInstrumentoDto {
  @IsString()
  @IsDefined()
  marca: string;

  @IsString()
  @IsDefined()
  tipo: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  precio: number;

  @IsArray()
  partituras: string[];

  @IsObject()
  @ValidateNested()
  sondios: { nombre: string; frecuencia: number };
}
