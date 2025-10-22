import { Injectable } from '@nestjs/common';
import { CreatePublicacioneDto } from './dto/create-publicacione.dto';
import { UpdatePublicacioneDto } from './dto/update-publicacione.dto';

@Injectable()
export class PublicacionesService {
  create(createPublicacioneDto: CreatePublicacioneDto) {
    return 'This action adds a new publicacione';
  }

  findAll() {
    return `This action returns all publicaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicacione`;
  }

  update(id: number, updatePublicacioneDto: UpdatePublicacioneDto) {
    return `This action updates a #${id} publicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicacione`;
  }
}
