import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Juegos } from './pages/juegos/juegos';
import { Admin } from './pages/admin/admin';
import { Error } from './pages/error/error';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'registro',
    component: Registro,
  },
  {
    path: 'juegos',
    component: Juegos,
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
