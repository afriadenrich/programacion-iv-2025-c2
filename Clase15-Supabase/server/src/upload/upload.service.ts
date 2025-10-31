import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { randomUUID } from 'crypto';

@Injectable()
export class UploadService {
    constructor(private readonly supaService: SupabaseService) {}

    async uploadImage(file: Express.Multer.File) {
        const extension = file.originalname.split('.').pop(); //image.png
        const path = `uploads/${randomUUID()}.${extension}`;

        const { error } = await this.supaService.supabase.storage
            .from('fotos')
            .upload(path, file.buffer, {
                contentType: file.mimetype,
                upsert: false,
            });

        if (error) throw new BadRequestException('No se pudo subir el archivo', error.message);
        const { data } = this.supaService.getPublicUrl(path);
        return { url: data.publicUrl, path };
    }

    async deleteFile(path: string) {
        const { error } = await this.supaService.supabase.storage.from('fotos').remove([path]);
        if (error) throw new BadRequestException('Error al eliminar archivo: ', error.message);
        return { ok: true };
    }
}
