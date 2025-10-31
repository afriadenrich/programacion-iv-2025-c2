import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LowercasePipe } from './lowercase/lowercase.pipe';
import {
  Cache,
  CACHE_MANAGER,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/cache-manager';
import { LazyModuleLoader } from '@nestjs/core';
import { MyLogger } from './logger/logger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private lazyModuleLoader: LazyModuleLoader,
    private logger: ConsoleLogger,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * PIPES
   */
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

  /**
   * CACHÉ
   */
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(1000)
  @Get('/cache')
  cacheAutomatico() {
    return 'Devuelve';
  }

  @Get('/cache/manual')
  async cacheManual() {
    const guardado = await this.cacheManager.get('manual');

    if (guardado) {
      return guardado;
    }

    await this.cacheManager.set('manual', 'Devuelve');
    return 'Devuelve';
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(10000)
  @Get('/cache/lento')
  cacheLento() {
    for (let i = 0; i < 99999; i++) {
      for (let j = 0; j < 99999; j++) {}
    }

    return 'tarda';
  }

  @Get('/cache/lento/:numero')
  async cacheLentoNumero(@Param('numero', ParseIntPipe) numero: number) {
    const guardado = await this.cacheManager.get('manual' + numero);

    if (guardado) {
      return guardado;
    }

    for (let i = 0; i < 99999; i++) {
      for (let j = 0; j < numero; j++) {}
    }

    await this.cacheManager.set('manual' + numero, numero);
    return numero;
  }

  @Get('/otro')
  async otro() {
    // import("./otro-module/otro-module.module.js").then((m) => m.OtroModuleModule);
    this.logger.log('Arranca', 'Ejemplo');
    const archivo = await import('./otro-module/otro-module.module.js');
    const modulo = archivo.OtroModuleModule;

    const moduloRef = await this.lazyModuleLoader.load(() => modulo);

    const { OtroServiceService } = await import(
      './otro-module/otro-service/otro-service.service.js'
    );

    const servicio = moduloRef.get(OtroServiceService);

    return servicio.otro();
  }
}
