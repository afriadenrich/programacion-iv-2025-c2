import { Component } from '@angular/core';
import { Listado } from '../../components/listado/listado';
import { AgregarAlumnos } from '../../components/agregar-alumnos/agregar-alumnos';
import { DetalleAlumnos } from '../../components/detalle-alumnos/detalle-alumnos';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-alumnos',
  imports: [Listado, AgregarAlumnos, DetalleAlumnos],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  listado: Persona[] = [
    new Persona(123, 'A', 'B'),
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

  agregarAlArrayEnElPadre(persona: Persona) {
    this.listado.push(persona);
  }
}
