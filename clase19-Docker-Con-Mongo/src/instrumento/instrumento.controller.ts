import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { HttpExceptionFilter } from '../filters/http-exception/http-exception.filter';

@Controller('instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Post()
  create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createInstrumentoDto);
  }

  @Get()
  findAll() {
    return this.instrumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrumentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstrumentoDto: UpdateInstrumentoDto,
  ) {
    return this.instrumentoService.update(id, updateInstrumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrumentoService.remove(id);
  }

  @Get('frecuencia/:frecuencia')
  traerPorFrencuencia(@Param('frecuencia', ParseIntPipe) frecuencia: number) {
    return this.instrumentoService.traerPorFrencuencia(frecuencia);
  }

  @UseFilters(HttpExceptionFilter)
  @Get('partituras/:partitura')
  buscarPartituras(@Param('partitura') partitura: string) {
    return this.instrumentoService.buscarPartituras(partitura);
  }
}
