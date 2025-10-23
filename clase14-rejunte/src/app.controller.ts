import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LowercasePipe } from './lowercase/lowercase.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /* PIPES */
  @Get('/dato/:id')
  traerConPipe(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  @Get('/info/:id')
  traerConPipeYError(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return { id };
  }

  @Get('/query')
  traerConPipeYQuery(
    @Query('id', ParseIntPipe)
    id: number,
  ) {
    return { id };
  }

  @Post('/body')
  enviarConPipeYBody(
    @Body('nombre', LowercasePipe)
    id: string,
  ) {
    return { id };
  }

  // @Get("/header")
  // headerPipe(@Headers("id", ParseIntPipe) id: number) {
  // Este no anda
  // }
}
