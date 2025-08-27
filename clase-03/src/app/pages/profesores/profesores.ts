import { Component } from '@angular/core';
import { Listado } from '../../components/listado/listado';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-profesores',
  imports: [Listado],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  profesores: Persona[] = [
    {
      nombre: 'AAA',
      apellido: 'BBB',
      legajo: 4561,
    },
  ];
}
