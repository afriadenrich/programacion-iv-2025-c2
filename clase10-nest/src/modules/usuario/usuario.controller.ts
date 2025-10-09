import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

// interface Filtros {
//   offset: number;
//   limit: number;
//   nombre: string;
// }

@Controller('usuario')
export class UsuarioController {
  @Get()
  traerUsuarios(@Query() queryParams: any) {
    console.log(queryParams);
    return { usuarios: [] };
  }

  @Post()
  crearUsuario(@Body() body: any) {
    console.log(body);
    return { mensaje: 'Usuario creado' };
  }

  // @Get('/todos')
  // traerConFiltros(
  //   @Query('limit') limit: number,
  //   @Query('offeset') offset: number,
  //   // ...
  // ) {
  //   // limit
  //   // offset
  //   // nombre
  //   // apellido
  //   // edad
  // }

  // @Get('/todos')
  // traerConFiltro(@Query() query: Filtros) {
  //   const { offset, limit, nombre } = query;
  // }

  // /usuario/id?id=1
  @Get('/id')
  traerPorId(@Query('id') id: string) {
    const idNumerico = parseInt(id);
    return idNumerico;
  }

  @Get('/:nombre/:apellido')
  traerPorNombre(
    @Param('nombre') nombre: string,
    @Param('apellido') apellido: string,
  ) {
    return nombre + ' ' + apellido;
  }

  @Put()
  @HttpCode(202)
  modificar(@Req() req: Request) {
    console.log(req.url);
    return 'Hola mundo';
  }
}
