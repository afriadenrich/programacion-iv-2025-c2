import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicacioneDto } from './create-publicacione.dto';

export class UpdatePublicacioneDto extends PartialType(CreatePublicacioneDto) {}
