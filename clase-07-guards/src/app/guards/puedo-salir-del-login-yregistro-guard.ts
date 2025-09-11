import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const puedoSalirDelLoginYRegistroGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // Si quiero navegar a login o registro, que me deje.
  // Si no estoy logueado, no quiero que me deje salir.
  // Si estoy logueado quiero que me deje salir.

  const auth = inject(Auth);

  if (auth.user) {
    return true;
  }

  // console.log(component, currentRoute, currentState, nextState);

  if (nextState.url === '/login' || nextState.url === '/registro') {
    return true;
  }

  return false;
};
