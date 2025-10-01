import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  contador = signal<number>(0);

  sumar() {
    this.contador.update((val) => {
      return ++val;
    });
  }
}
