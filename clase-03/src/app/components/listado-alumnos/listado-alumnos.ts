import { Component, input } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  imports: [],
  templateUrl: './listado-alumnos.html',
  styleUrl: './listado-alumnos.css',
})
export class ListadoAlumnos {
  /* input -> Entrada -> recibir datos desde un componente padre */
  listadoHijo = input<any[]>([]);
}
