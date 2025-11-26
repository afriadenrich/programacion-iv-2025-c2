import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InstrumentoModule } from './instrumento/instrumento.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    InstrumentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// De cloud
// 1. Crear el cluster
// 2. En security crear usuario y contraseña
// 3. En el cluster, connect y después drivers. El driver es mongoose 7.0+
// mongodb+srv://user_name:user_pass@cluster0.x284j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// De compass
// mongodb://localhost:27017
