import {
    Controller,
    UseInterceptors,
    Post,
    UploadedFile,
    BadRequestException,
    Delete,
    Body,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadFileInterceptor } from 'src/interceptors/upload-file/upload-file.interceptor';
import { DeleteDto } from './dto/delete.dto';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post()
    @UseInterceptors(UploadFileInterceptor)
    upload(@UploadedFile() file: Express.Multer.File) {
        if (!file) throw new BadRequestException('No se subió ningún archivo');
        return this.uploadService.uploadImage(file);
    }

    @Delete()
    delete(@Body() dto: DeleteDto) {
        return this.uploadService.deleteFile(dto.path);
    }
}
