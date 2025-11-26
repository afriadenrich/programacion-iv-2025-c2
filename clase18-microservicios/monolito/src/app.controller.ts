import { Controller, Get, Inject } from '@nestjs/common';
import { type ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HeroesService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller()
export class AppController {
  constructor(
    @Inject('MICROSERVICIO') private client: ClientProxy,
    @Inject('GRPC') private clientGRPC: ClientGrpc,
  ) {}

  @Get()
  getHello() {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3, 4, 5];
    return this.client.send<string>(pattern, payload);
  }

  @Get('/grpc')
  getGrpc() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const service: HeroesService = this.clientGRPC.getService('HeroesService');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return service.findOne({ id: 1 });
  }
}
