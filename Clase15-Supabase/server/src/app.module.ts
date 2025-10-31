import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';
import { UploadModule } from './upload/upload.module';

@Module({
    imports: [UploadModule],
    controllers: [AppController],
    providers: [AppService, SupabaseService],
})
export class AppModule {}
