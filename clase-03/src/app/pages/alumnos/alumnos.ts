import { Component } from '@angular/core';
import { ListadoAlumnos } from '../../components/listado-alumnos/listado-alumnos';
import { AgregarAlumnos } from '../../components/agregar-alumnos/agregar-alumnos';
import { DetalleAlumnos } from '../../components/detalle-alumnos/detalle-alumnos';

@Component({
  selector: 'app-alumnos',
  imports: [ListadoAlumnos, AgregarAlumnos, DetalleAlumnos],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  listado = [
    {
      nombre: 'A',
      apellido: 'B',
      legajo: 123,
    },
    {
      nombre: 'A',
      apellido: 'D',
      legajo: 456,
    },
    {
      nombre: 'E',
      apellido: 'F',
      legajo: 789,
    },
    {
      nombre: 'G',
      apellido: 'H',
      legajo: 111,
    },
    {
      nombre: 'A',
      apellido: 'F',
      legajo: 222,
    },
  ];
}
