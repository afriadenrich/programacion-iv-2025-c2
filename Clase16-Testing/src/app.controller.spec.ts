import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    // Crear el módulo e insertar el controller
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
    appService = app.get(AppService);
  });

  it('should return Hello World!', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });

  it('should return status 200', () => {
    jest.spyOn(appService, 'getStatus').mockImplementation(() => 200);

    expect(appController.getStatus()).toBe(200);
  });

  it('should return status 500', () => {
    jest.spyOn(appService, 'getStatus').mockImplementation(() => 500);

    expect(appController.getStatus()).toBe(500);
  });
});
