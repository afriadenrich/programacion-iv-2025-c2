/* todo el archivo: eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateLibroDto {
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
  @IsString()
  nombre: string;

  /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
  @IsString()
  autor: string;
}

// @IsEmail()
// @Is
