import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { Auto } from '../classes/auto';

@Injectable({
  providedIn: 'root',
})
export class Db {
  private sS = inject(Supabase);

  async traerAutos() {
    // const resultado = await this.sS.supabase.schema('public').from('autos').select('*').limit(2);

    // SELECT (id, marca, modelo, precio, disponible) FROM autos WHERE marca = "audi" AND precio >= 5000 ORDER BY precio
    const resultado = await this.sS.supabase
      .schema('public')
      .from('autos')
      .select('id, marca, modelo, precio, disponible, garage (id, precio_hora, direccion)')
      .eq('marca', 'audi')
      .gte('precio', 5000)
      .order('precio', { ascending: true });

    if (resultado.error) {
      console.log(resultado.error);
      return [];
    } else {
      console.log(resultado);
      return resultado.data as Auto[];
    }
  }

  async crearAuto(auto: Auto): Promise<any | null> {
    const resultado = await this.sS.supabase.from('autos').insert(auto);

    return resultado.error?.message;
  }

  async traerAutoPorId(id: number) {
    const { data, error } = await this.sS.supabase.from('autos').select('*').eq('id', id);
  }

  async modificarAuto(auto: Auto) {
    const { data, error } = await this.sS.supabase.from('autos').update(auto).eq('id', auto.id);
  }

  async eliminarAuto(id: number) {
    const { data, error } = await this.sS.supabase.from('autos').delete().eq('id', id);
  }
}
