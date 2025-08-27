import { Component, input } from '@angular/core';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-detalle-alumnos',
  imports: [],
  templateUrl: './detalle-alumnos.html',
  styleUrl: './detalle-alumnos.css',
})
export class DetalleAlumnos {
  alumno = input<Persona | null>(null);
}
