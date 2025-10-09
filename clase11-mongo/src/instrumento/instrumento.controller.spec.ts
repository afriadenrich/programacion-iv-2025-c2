import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentoController } from './instrumento.controller';
import { InstrumentoService } from './instrumento.service';

describe('InstrumentoController', () => {
  let controller: InstrumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrumentoController],
      providers: [InstrumentoService],
    }).compile();

    controller = module.get<InstrumentoController>(InstrumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
