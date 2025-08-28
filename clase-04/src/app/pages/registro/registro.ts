import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = new FormControl('');
  // apellido = new FormControl('');
  // correo = new FormControl('');
  // contrasenia = new FormControl('');
  // repetirContrasenia = new FormControl('');

  formulario = new FormGroup({
    nombre: this.nombre,
    apellido: new FormControl(''),
    correo: new FormControl(''),
    contrasenia: new FormControl(''),
    repetirContrasenia: new FormControl(''),
  });

  // login = new FormGroup({
  //   correo: new FormControl(''),
  // contrasenia: new FormControl(''),
  // });
}
