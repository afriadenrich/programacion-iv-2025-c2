import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentoService } from './instrumento.service';

describe('InstrumentoService', () => {
  let service: InstrumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstrumentoService],
    }).compile();

    service = module.get<InstrumentoService>(InstrumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
