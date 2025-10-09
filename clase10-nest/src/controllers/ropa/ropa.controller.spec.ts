import { Test, TestingModule } from '@nestjs/testing';
import { RopaController } from './ropa.controller';

describe('RopaController', () => {
  let controller: RopaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RopaController],
    }).compile();

    controller = module.get<RopaController>(RopaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
