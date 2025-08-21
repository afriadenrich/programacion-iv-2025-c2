import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Error } from './error/error';
import { Bindeos } from './bindeos/bindeos';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: 'bienvenida', // url
    component: Bienvenida,
  },
  {
    path: 'error',
    component: Error,
  },
  {
    path: 'bindeos',
    component: Bindeos,
  },
  {
    path: 'login',
    component: Login,
  },
];

// /tutoriales -> Tutoriales
// /bienvenida -> Bienvenida
