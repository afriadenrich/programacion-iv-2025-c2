import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  // apellido = new FormControl('');
  // correo = new FormControl('');
  // contrasenia = new FormControl('');
  // repetirContrasenia = new FormControl('');

  formulario = new FormGroup({
    nombre: this.nombre,
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repetirContrasenia: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validarContrasenias,
    ]),
  });

  login = new FormGroup({
    correo: new FormControl(''),
    contrasenia: new FormControl(''),
  });

  enviarFormulario() {
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.formulario.get('nombre'));
  }

  validarContrasenias(control: AbstractControl): ValidationErrors | null {
    const error = { iguales: false };

    if (!control.value) {
      return error;
    }

    if (!this.formulario) {
      return error;
    }

    const contrasenia = this.formulario.get('contrasenia')?.value;

    if (!contrasenia) {
      return error;
    }

    if (control.value === contrasenia) {
      return null;
    } else {
      return error;
    }
  }
}
