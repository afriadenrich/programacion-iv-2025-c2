import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Error } from './error/error';
import { Bindeos } from './bindeos/bindeos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenida, Error, Bindeos, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
