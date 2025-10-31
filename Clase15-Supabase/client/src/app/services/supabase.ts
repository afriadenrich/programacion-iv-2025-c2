import { environment } from './../../environments/environments';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  //bucket: "fotos"
  //filePath: "perfiles/nombreimagen.png"

  async uploadFile(bucket: string, filePath: string, file: File) {
    return await this.supabase.storage.from(bucket).upload(filePath, file);
  }

  async getPublicUrl(bucket: string, filePath: string) {
    const { data } = this.supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  }

  async removeFile(bucket: string, path: string) {
    return await this.supabase.storage.from(bucket).remove([path]);
  }

  //crear bucket
  async crearBucket() {
    const { data, error } = await this.supabase.storage.createBucket('fotos', {
      public: true,
      allowedMimeTypes: ['image/*'],
      fileSizeLimit: '1MB',
    });
    return { data, error };
  }

  //Nest JS
  async uploadNest(formdata: FormData) {
    try {
      const res = await fetch(`${environment.apiUrl}/upload`, {
        method: 'POST',
        body: formdata,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Subida de archivo inválida: ${res.status} ${text}`);
      }

      const json = await res.json();
      return json;
    } catch (e) {
      console.error('Error al subir archivo: ', e);
    }
  }

  async deleteFromNest(path: string) {
    return await fetch(`${environment.apiUrl}/upload`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path: path }),
    });
  }
}
