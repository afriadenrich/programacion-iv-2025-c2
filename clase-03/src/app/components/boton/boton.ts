import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
  texto = input('');
}
