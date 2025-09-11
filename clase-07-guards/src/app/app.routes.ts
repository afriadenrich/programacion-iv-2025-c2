import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Admin } from './pages/admin/admin';
import { Error } from './pages/error/error';
import { estaLogueadoGuard } from './guards/esta-logueado-guard';
import { puedoSalirDelLoginYRegistroGuard } from './guards/puedo-salir-del-login-yregistro-guard';
import { noEstaLogueadoGuard } from './guards/no-esta-logueado-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
    canDeactivate: [puedoSalirDelLoginYRegistroGuard],
    canActivate: [noEstaLogueadoGuard],
  },
  {
    path: 'registro',
    component: Registro,
    canDeactivate: [puedoSalirDelLoginYRegistroGuard],
    canActivate: [noEstaLogueadoGuard],
  },
  {
    path: 'juegos',
    // component: Juegos,
    loadComponent: () => import('./pages/juegos/juegos').then((arch) => arch.Juegos),
    canActivate: [estaLogueadoGuard],
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: '**',
    component: Error,
    pathMatch: 'full',
  },
];
