import { Pipe, PipeTransform } from '@angular/core';

// https://angular.io/guide/pipes
/*
Los pipes nos permiten filtrar información, por eso se llaman tuberías.
Sirven para modificar cadenas, importes de moneda, fechas y otros datos para su visualización.
Solo los modifican para mostrarlos, es algo puramente visual.
Esto se realiza a través de la función transform, que recibe como value un string y también puede recibir argumentos
a través de una variable ...args.

Con esto, podemos usar los pipes que ya trae angular como:
UpperCasePipe :	Transforma el texto a mayúsculas.
DecimalPipe: Transforma un número en una cadena con un punto decimal, formateada según las reglas locales.
etc.

Pueden encontrar el resto en la guía de Angular.

Aquí vemos un ejemplo de cómo utilizar el UpperCasePipe
<h3>Transformar a mayusculas: {{ minusculas | uppercase }}</h3>

El ejemplo de abajo recibe una fecha y devuelve un string que comunica hace cuánto fue esa fecha,
ideal para comunicar la última vez que alguien se conectó.

Separamos la lógica de visualización, no hay necesidad de guardar estos datos ya que cambian a cada minuto.

podemos aplicar varios pipe al mismo tiempo con solo agregar otro pipe |
{{ variable | uppercase | otropipe }}

Para pasar valores, usamos los ":" y luego el valor que le queremos agregar. Si queremos seguir agregando valores, agregamos ":" y otro valor o variable. ej: {{ valorInicial | miPipe : "valor1" : "valor2" }}
Todos estos parámetros se almacenan en el array "...args" de la función transform.
*/
@Pipe({
  name: 'fecha',
})
export class FechaPipe implements PipeTransform {
  transform(value: string): string {
    let ahora = Date.now();
    let antes = Date.parse(value);

    let milisegundo = ahora - antes;
    let segundos: any = Math.floor(milisegundo / 1000);
    let minutos: any = 0;
    let horas = 0;
    let dias = Math.floor(horas / 24);
    let mensaje = 'hace: ';

    if (segundos > 60) {
      minutos = Math.floor(segundos / 60);
      segundos = segundos % minutos;

      if (minutos > 60) {
        horas = Math.floor(minutos / 60);
        minutos = minutos % horas;
      }

      if (horas > 24) {
        dias = Math.floor(horas / 24);
        horas = horas % dias;
      }

      if (dias != 0) {
        mensaje = mensaje + dias + ' días ';
      } else {
        mensaje = 'Hoy ' + mensaje;
      }

      if (minutos < 10) minutos = '0' + minutos;

      if (segundos < 10) segundos = '0' + segundos;

      mensaje = mensaje + horas + ':' + minutos + ':' + segundos;
    } else {
      mensaje = 'Recien ';
    }
    return mensaje;
  }
}
