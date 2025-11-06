import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  httpClient = inject(HttpClient)

  subir(archivo:any){

    const formData = new FormData()
    formData.append("algo","lago"),
    formData.append("body","algo en el body")
    formData.append("foto",archivo,archivo.name)


    this.httpClient.post("http://localhost:3000/upload",formData).subscribe((resultado)=>[
      console.log(resultado)
    ])
  }
}
