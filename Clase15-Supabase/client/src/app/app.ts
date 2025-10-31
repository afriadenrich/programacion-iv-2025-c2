import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Supabase } from './services/supabase';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');

  supaService = inject(Supabase);
  selectedFile = signal<File | null>(null);
  urlFoto = signal<string | null>(null);
  lasPath = signal<string | null>(null);

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedFile.set(file);
  }

  async upload() {
    if (!this.selectedFile()) return;

    const file = this.selectedFile();
    const path = `perfiles/${file?.name}`;
    this.lasPath.set(path);

    const { data, error } = await this.supaService.uploadFile('fotos', path, file!);

    if (error) {
      console.error('Error al subir el archivo: ', error);
    }

    const publicUrl = await this.supaService.getPublicUrl('fotos', path);
    this.urlFoto.set(publicUrl);
  }

  async delete() {
    if (!this.lasPath()) return;

    const { data, error } = await this.supaService.removeFile('fotos', this.lasPath()!);
    if (error) {
      console.error('Error al eliminar archivo: ', error);
    }

    console.log('archivo eliminado exitosamente!');
    this.urlFoto.set(null);
    this.lasPath.set(null);
  }

  async uploadFromNest() {
    if (!this.selectedFile()) return;
    const formData = new FormData();
    formData.append('file', this.selectedFile()!);

    const subirNest = await this.supaService.uploadNest(formData);
    this.urlFoto.set(subirNest.url);
    this.lasPath.set(subirNest.path);
  }

  async deleteFromNest() {
    if (!this.lasPath()) return;
    const borrarNest = await this.supaService.deleteFromNest(this.lasPath()!);
    this.urlFoto.set(null);
    this.lasPath.set(null);
    console.log(borrarNest);
  }
}
