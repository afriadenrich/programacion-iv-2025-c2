import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { estaLogueadoGuard } from './esta-logueado-guard';

describe('estaLogueadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => estaLogueadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
