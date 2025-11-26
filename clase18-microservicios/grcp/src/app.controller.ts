/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata, type ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('app')
export class AppController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero | undefined {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];

    return items.find(({ id }) => id === data.id);
  }
}

interface HeroById {
  id: number;
}

interface Hero {
  id: number;
  name: string;
}
