import { Module } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoController } from './instrumento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Instrumento, InstrumentoSchema } from './entities/instrumento.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Instrumento.name, schema: InstrumentoSchema },
    ]),
  ],
  controllers: [InstrumentoController],
  providers: [InstrumentoService],
})
export class InstrumentoModule {}
