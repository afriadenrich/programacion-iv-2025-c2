import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  // Inyección de dependencias
  constructor(private readonly appService: AppService) {}

  // Rutas del controller

  // GET -> localhost:3000/ejemplo/
  @Get() // method / verbo
  getHello(): string {
    return this.appService.getHello();
  }

  // POST -> localhost:3000/ejemplo/a/b/d
  @Post('/a/b/d')
  crearAlgo() {
    return { algo: 'algo' };
  }
}
