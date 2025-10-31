import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { MyLogger } from './logger/logger';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [AppService, MyLogger, ConsoleLogger],
})
export class AppModule {}
