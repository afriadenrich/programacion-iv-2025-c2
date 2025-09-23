import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  NgClass,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { TextoLargoPipe } from './pipes/texto-largo-pipe';
import { FechaPipe } from './pipes/fecha-pipe';
import { Highlight } from './directives/highlight';
import { RouterOutlet, RouterLink } from '@angular/router';

// Necesito importar los pipes

@Component({
  selector: 'app-root',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    TextoLargoPipe,
    FechaPipe,
    NgClass,
    Highlight,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nombre = 'agustin friadenrich es el profesor';

  fecha = new Date();

  numero = 12389.12345678;

  formato_fecha = 'dd/MM/yyyy HH:mm:ss a zzzz';

  persona = {
    nombre: this.nombre,
    fecha: this.fecha,
    formato: this.formato_fecha,
  };

  isSpecial = false;

  currentClasses: Record<string, boolean> = {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true,
    };
  }

  ngOnInit() {
    this.setCurrentClasses();
  }

  verde = '#00ff00';
}
