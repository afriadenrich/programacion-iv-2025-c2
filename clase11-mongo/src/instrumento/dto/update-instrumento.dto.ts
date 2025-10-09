import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrumentoDto } from './create-instrumento.dto';

export class UpdateInstrumentoDto extends PartialType(CreateInstrumentoDto) {}
