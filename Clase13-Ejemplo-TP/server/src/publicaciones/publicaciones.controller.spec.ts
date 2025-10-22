import { Test, TestingModule } from '@nestjs/testing';
import { PublicacionesController } from './publicaciones.controller';
import { PublicacionesService } from './publicaciones.service';

describe('PublicacionesController', () => {
  let controller: PublicacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicacionesController],
      providers: [PublicacionesService],
    }).compile();

    controller = module.get<PublicacionesController>(PublicacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
