import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('ropa')
export class RopaController {
  @Get()
  traerRopa(@Res() response: Response) {
    response
      .status(HttpStatus.LOOP_DETECTED)
      .send({ mensaje: 'No autorizado' });
  }
}
