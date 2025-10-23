import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(Auth);

  logueo() {
    this.auth.logueo({ usuario: 'agus', pasword: '123' });
  }

  logueoCookie() {
    this.auth.logueoCookie({ usuario: 'agus', pasword: '123' });
  }

  data() {
    this.auth.data();
  }
  dataCookie() {
    this.auth.dataCookie();
  }
}
