import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { puedoSalirDelLoginYRegistroGuard } from './puedo-salir-del-login-yregistro-guard';

describe('puedoSalirDelLoginYRegistroGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => puedoSalirDelLoginYRegistroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
