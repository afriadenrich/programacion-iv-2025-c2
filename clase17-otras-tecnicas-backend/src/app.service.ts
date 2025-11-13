import {
  Cache,
  CACHE_MANAGER,
  CacheKey,
  CacheTTL,
} from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
//import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @CacheKey('hello')
  @CacheTTL(50)
  async getHello() {
    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 5000);
    });
    return 'Hello World!';
  }

  //@Cron('*/10 * * * * *') // 21:24:00 12/11/2025
  autonomo() {
    console.log('ME EJECUTO DE FORMA AUTÓNOMA');
  }

  //@Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
  primeroDelMesAMediaNoche() {
    console.log('Es tarde');
  }

  //@Interval(10000)
  interval() {
    console.log('intervalo de 10 segundos');
  }
}
