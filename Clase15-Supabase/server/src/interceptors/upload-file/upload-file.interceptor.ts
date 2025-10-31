import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

export const UploadFileInterceptor = FileInterceptor('file', {
    storage: memoryStorage(), //en RAM
    limits: { fileSize: 1 * 1024 * 1024 }, //1MB
});
