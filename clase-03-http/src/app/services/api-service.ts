import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Primer paso: injectar el servicio
  http = inject(HttpClient);
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  pokemonActual = signal<any>('');

  traerPorNombre(nombre: string) {
    //segundo paso: crear la peticion
    const peticion: Observable<any> = this.http.get<any>(this.apiUrl + nombre);

    //tercer paso: suscribirnos y definir que vamos a hacer con la respuesta
    const suscripcion: Subscription = peticion.subscribe((respuesta) => {
      this.pokemonActual.set(respuesta);

      //ultimo paso: cerrar la suscripcion, para no seguir escuchando
      suscripcion.unsubscribe();
    });
  }
}
