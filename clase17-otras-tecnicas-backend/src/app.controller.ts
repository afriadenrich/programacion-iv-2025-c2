import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/healthcheck')
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.http.pingCheck('pokeapi', 'https://pokeapi.co/api/v2/'),
      () => this.db.pingCheck('Mongo'),
      () =>
        this.disk.checkStorage('storage', {
          path: 'G:/',
          thresholdPercent: 0.9,
        }),
      () =>
        this.disk.checkStorage('storage2', {
          path: 'G:/',
          threshold: 1500 * 1024 * 1024 * 1024,
        }),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
