import { Injectable } from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Instrumento } from './entities/instrumento.entity';
import { Model } from 'mongoose';

@Injectable()
export class InstrumentoService {
  constructor(
    @InjectModel(Instrumento.name) private instModel: Model<Instrumento>,
  ) {}

  async create(createInstrumentoDto: CreateInstrumentoDto) {
    const documento = new this.instModel(createInstrumentoDto);

    const guardado = await documento.save();

    return guardado;
  }

  findAll() {
    return `This action returns all instrumento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrumento`;
  }

  update(id: number, updateInstrumentoDto: UpdateInstrumentoDto) {
    console.log(updateInstrumentoDto);
    return `This action updates a #${id} instrumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrumento`;
  }
}
