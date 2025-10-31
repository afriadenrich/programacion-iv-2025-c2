import { Component, inject,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms"
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  file? : File

  servicio = inject(Api)
  recargarArchivo(archivo:any){
    console.log(archivo)

    this.file = archivo.target.files[0]
  }

  subir(){
    this.servicio.subir(this.file)
  }
}
