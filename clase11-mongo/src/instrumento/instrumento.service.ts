import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
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
    console.log(createInstrumentoDto);
    const documento = new this.instModel(createInstrumentoDto);

    const guardado = await documento.save();

    return guardado;
  }

  async findAll() {
    const todos = await this.instModel.find();

    return todos;
  }

  async findOne(id: string) {
    try {
      const resultado = await this.instModel.findById(id);
      return resultado;
    } catch (error) {
      // throw new HttpException(
      //   'No se encuentra el instrumento',
      //   HttpStatus.NOT_FOUND,
      //   {
      //     cause: 'Mandaste mal el id',
      //     description: 'Más detallada del error',
      //   },
      // );

      throw new HttpException({}, HttpStatus.FORBIDDEN, {
        cause: error,
      });
    }
  }

  async update(id: string, updateInstrumentoDto: UpdateInstrumentoDto) {
    console.log(updateInstrumentoDto);
    const resultado = await this.instModel.updateOne(
      { _id: id },
      updateInstrumentoDto,
    );
    return resultado;
  }

  async remove(id: string) {
    const resultado = await this.instModel.deleteOne({ _id: id });
    return resultado;
  }

  async traerPorFrencuencia(frecuencia: number) {
    console.log(typeof frecuencia, frecuencia);
    const resultado = await this.instModel.find({
      'sonidos.frecuencia': { $lte: frecuencia },
    });

    return resultado;
  }

  async buscarPartituras(nombre: string) {
    throw new NotImplementedException();
    // throw new HttpException('No lo supe hacer', HttpStatus.NOT_IMPLEMENTED);

    const resultado = await this.instModel.find({
      // partituras: { $includes: nombre },
    });

    return resultado;
  }
}
