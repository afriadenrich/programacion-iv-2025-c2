import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  public user: null | any;

  public admin: boolean = false;

  // login() {}

  // registro() {}

  // logOut() {}

  cambiarAdmin() {
    this.admin = !this.admin;
  }

  cambiarUsuario() {
    this.user = this.user ? null : { nombre: 'Agus' };
  }
}
