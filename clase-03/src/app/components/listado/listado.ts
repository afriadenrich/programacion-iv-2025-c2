import { Component, input, output } from '@angular/core';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  /* input -> Entrada -> recibir datos desde un componente padre */
  listadoHijo = input<Persona[]>([]);
  envioDeAlumno = output<Persona>();

  verDetalle(alumno: Persona) {
    this.envioDeAlumno.emit(alumno);
  }

  alumno: IAlumno = {
    nombre: 'A',
    apellido: 'B',
    legajo: 123,
  };
}

type Alumno = {
  nombre: String;
  apellido: String;
  legajo: Number;
};

interface IAlumno {
  nombre: string;
  apellido: string;
  legajo: number;
}
