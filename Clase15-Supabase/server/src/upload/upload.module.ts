import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { SupabaseService } from 'src/supabase/supabase.service';

@Module({
    controllers: [UploadController],
    providers: [UploadService, SupabaseService],
})
export class UploadModule {}
