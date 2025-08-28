import { Component, inject } from '@angular/core';
import { Auth } from '../../service/auth';
import { RouterLink } from '@angular/router';
import {FormsModule} from "@angular/forms"


@Component({
  selector: 'app-registro',
  imports: [RouterLink,FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre:string = ""
  apellido:string = ""
  //ANTES

  // constructor(public auth:Auth){

  //   console.log(auth.usuarioActual.nombre)
    
  // }


  //AHORA
  auth = inject(Auth)

  guardarUsuario(){

    this.auth.guardarUsuario(this.nombre,this.apellido)
  }

}
