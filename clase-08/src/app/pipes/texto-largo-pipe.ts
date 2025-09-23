import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo',
})
export class TextoLargoPipe implements PipeTransform {
  // transform(value: string, ...args: unknown[]): unknown {
  // args[0] -> cantidadCaracteres
  // args[1] -> caracterFinal
  transform(value: string, cantidadCaracteres: number = 20, caracterFinal: string = '...'): string {
    if (value.length > cantidadCaracteres) {
      return value.slice(0, cantidadCaracteres).concat(caracterFinal);
    }

    return value;
  }
}

// ["manzana", "pera", "higo"]
// ...
// "manzana", "pera", "higo"
// {{ value | textoLargo : cantidadCaracteres : caracterFinal }}
