export class Persona {
  legajo: number = 0;
  nombre: string = '';
  apellido: string = '';

  constructor(legajo: number, nombre: string, apellido: string) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  toString() {
    return this.nombre + ' ' + this.apellido;
  }
}
