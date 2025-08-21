import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos', // <app-bindeos></app-bindeos>
  imports: [FormsModule],
  templateUrl: './bindeos.html',
  styleUrl: './bindeos.css',
})
export class Bindeos {
  nombre: string = 'Agus';
  contador: number = 0;

  link: string = 'https://google.com';
  estilo = 'background-color: red; height: 100px;';

  contar() {
    this.contador++;
    console.log(this.contador);
    this.link = 'https://github.com';
  }

  borrar() {
    this.nombre = '';
  }
}

// Binding o bindeo
// Conectar el html con el TS.

// {{ }} -> variables TS al HTML
// [] -> variables TS a atributos HTML
// (EVENTOS) -> funciones TS a atributos HTML.

// Bindeo doble -> [()]
