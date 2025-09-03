import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  email = '';
  password = '';

  authService = inject(Auth);

  // constructor(private authService: Auth){

  // }

  crearCuenta() {
    this.authService.crearCuenta(this.email, this.password);
  }
}
