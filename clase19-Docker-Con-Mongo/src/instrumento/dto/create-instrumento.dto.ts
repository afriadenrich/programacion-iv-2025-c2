import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
} from 'class-validator';

export class Sonido {
  @IsString()
  nombre: string;
  @IsNumber()
  frecuencia: number;
}

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

  // https://github.com/typestack/class-validator?tab=readme-ov-file#validating-arrays
  @IsArray()
  @IsString({ each: true }) // Cada elemento del objeto
  partituras: string[];

  @IsObject()
  @Type(() => Sonido) // Revisar la clase que viene, porque no anda como debería
  sonidos: Sonido;
}
