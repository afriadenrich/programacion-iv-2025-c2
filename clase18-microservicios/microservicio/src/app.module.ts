import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/microservicio'),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
