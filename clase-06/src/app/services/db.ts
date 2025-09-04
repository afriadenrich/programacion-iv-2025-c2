import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { Auto } from '../classes/auto';

@Injectable({
  providedIn: 'root',
})
export class Db {
  private sS = inject(Supabase);

  traerAutos() {}

  crearAuto(auto: Auto) {}

  traerAutoPorId(id: number) {}

  modificarAuto(auto: Auto) {}

  eliminarAuto(id: number) {}
}
