import { Component, inject } from '@angular/core';
import { Auth } from '../../service/auth';


@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  auth = inject(Auth)
}
