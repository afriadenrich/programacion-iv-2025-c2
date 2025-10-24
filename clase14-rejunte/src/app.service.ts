import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger('AppService', {
    timestamp: true,
  });

  getHello(): string {
    this.logger.log('Mensaje genérico');
    this.logger.warn('Mensaje genérico');
    this.logger.error('Mensaje genérico');
    this.logger.fatal('Mensaje genérico');
    this.logger.debug('Mensaje genérico');
    this.logger.verbose('Mensaje genérico');
    return 'Hello World!';
  }
}
