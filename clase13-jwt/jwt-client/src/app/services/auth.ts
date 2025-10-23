import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  httpClient = inject(HttpClient);

  apiUrl = 'http://localhost:3000';

  async logueo(usuario: Usuario) {
    const peticion = this.httpClient.post(this.apiUrl + '/auth/login', usuario, {
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });

    peticion.subscribe((respuesta: any) => {
      console.log(respuesta);

      localStorage.setItem('token', respuesta.token);
    });
  }
  logueoCookie(usuario: Usuario) {
    const peticion = this.httpClient.post(this.apiUrl + '/auth/login/cookie', usuario, {
      // credentials: 'include',
    });

    peticion.subscribe((respuesta) => {
      console.log(respuesta);
    });
  }

  data() {
    const peticion = this.httpClient.get(this.apiUrl + '/auth/data/jwt', {
      // headers: {
      //   Authorization: 'Bearer ' + localStorage.getItem('token'),
      // },
    });

    peticion.subscribe((response) => {
      console.log(response);
    });
  }

  dataCookie() {
    const peticion = this.httpClient.get(this.apiUrl + '/auth/data/jwt/cookie', {
      // credentials: 'include',
    });

    peticion.subscribe((response) => {
      console.log(response);
    });
  }
}

interface Usuario {
  usuario: string;
  pasword: string;
}
