import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  usuarioActual = {
    nombre:"agus",
    apellido:"lande"
  }

  guardarUsuario(nombre:string,apellido:string):void{

    this.usuarioActual.nombre = nombre
    this.usuarioActual.apellido = apellido

  }
}
