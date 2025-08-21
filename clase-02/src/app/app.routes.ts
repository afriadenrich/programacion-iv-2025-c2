import { Routes } from '@angular/router';
import { Usuarios } from './pages/usuarios/usuarios';
// import { Bienvenida } from './pages/bienvenida/bienvenida';
// import { Error } from './pages/error/error';
// import { Login } from './pages/login/login';
// import { Registro } from './pages/registro/registro';
// import { Auth } from './pages/auth/auth';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    // component: Bienvenida,
    loadComponent: () =>
      import('./pages/bienvenida/bienvenida').then((archivo) => archivo.Bienvenida),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((m) => m.Auth),
    loadChildren: () => import('./pages/auth/auth.routes').then((routes) => routes.authRoutes),
  },
  { path: 'users/:id', redirectTo: 'usuarios/:id', pathMatch: 'prefix' },
  {
    path: 'usuarios/:id',
    component: Usuarios,
  },
  {
    path: '**', // Cualquier ruta no definida / comodín
    loadComponent: () => import('./pages/error/error').then((m) => m.Error),
    // redirectTo: 'bienvenida',
  },
];

//   {
//     path: 'autenticacion/registro',
//     component: Registro,
//   },
//   {
//     path: 'autenticacion/login',
//     component: Login,
//   },
