import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

// Si hay usuario, true, pasa. Si no, no pasa, false.
export const estaLogueadoGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  // console.log(route);
  // console.log(state);
  // return auth.user ? true : false;
  return auth.user ? true : router.parseUrl('/');

  alert('sufrimiento');
};
