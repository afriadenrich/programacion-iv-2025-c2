import { Test, TestingModule } from '@nestjs/testing';
import { PublicacionesService } from './publicaciones.service';

describe('PublicacionesService', () => {
  let service: PublicacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicacionesService],
    }).compile();

    service = module.get<PublicacionesService>(PublicacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
