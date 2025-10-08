import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contador } from './contador';

// describe -> agrupadord de pruebas
describe('Contador component', () => {
  let fixture: ComponentFixture<Contador>;
  let instancia: Contador;

  beforeEach(() => {
    // TestBed -> ambiente, necesitamos configurarlo para saber qué vamos a usar.
    // TestBed.configureTestingModule({ imports: [Contador], }); -> No hace falta, porque somos standalone, solo para módulos extra.
    fixture = TestBed.createComponent(Contador);
    instancia = fixture.componentInstance;
  });

  // esta prueba...
  it('debería instanciar el contador en 0', () => {
    // assertion
    // ¿Qué es lo que espero que pase? Yo espero que...
    expect(instancia.contador()).toBe(0);
    // instancia.contador() === 0
  });

  it('debería sumar 1 al contador al hacer click en el botón', () => {
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('button');
    if (button) {
      button.click();
      expect(instancia.contador()).toBe(1);
    }
  });

  it('debería mostrar el contador en el h1', () => {
    const element: HTMLElement = fixture.nativeElement;
    const h1 = element.querySelector('h1');

    // Tengo que esperar a que renderize la primera vez.
    fixture.detectChanges(); // va a esperar a que se detecten todas las signals, y mas cosas antes de seguir.

    expect(h1?.textContent).toBe(instancia.contador().toString());
  });
});
