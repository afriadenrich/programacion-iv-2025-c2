import { Component } from '@angular/core';
import { ListadoAlumnos } from '../../components/listado-alumnos/listado-alumnos';

@Component({
  selector: 'app-profesores',
  imports: [ListadoAlumnos],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  profesores = [
    {
      nombre: 'AAA',
      apellido: 'BBB',
      legajo: 4561,
    },
  ];
}
