import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-agregar-alumnos',
  imports: [FormsModule],
  templateUrl: './agregar-alumnos.html',
  styleUrl: './agregar-alumnos.css',
})
export class AgregarAlumnos {
  // output -> salida -> Envio de información hacia el padre
  nombre: string = 'a';
  apellido: string = 'b';
  legajo: number = 0;

  envioDeAlumno = output<Persona>();

  enviarAlPadreDesdeElHijo() {
    const persona = new Persona(this.legajo, this.nombre, this.apellido);
    console.log(persona);
    this.envioDeAlumno.emit(persona);
    // Enviar al padre el elemnto a agregar
  }
}
