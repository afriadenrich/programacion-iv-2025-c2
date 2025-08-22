import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  // imports: [NgIf],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios = [
    {
      nombre: 'Agus',
      perfil: 'Profesor',
    },
    {
      nombre: 'Pepito',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Lo que sea',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Otro',
      perfil: 'Estudiante',
    },
  ];
  usuarioActual: number = 0;

  private activatedRoute = inject(ActivatedRoute);

  // /usuarios/123
  // /usuarios/1234
  // ActivatedRoute

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Se instancia el componente usuarios');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Se destruye el componente usuarios');
  }

  ngOnChanges() {
    console.log('Changes');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('Check');
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioActual = parseInt(id);
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('Init content');
  }
  ngAfterContentChecked(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('Checked content');
  }
}
