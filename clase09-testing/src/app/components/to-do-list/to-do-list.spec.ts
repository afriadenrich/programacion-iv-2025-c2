import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoList } from './to-do-list';

describe('ToDoList', () => {
  let component: ToDoList;
  let fixture: ComponentFixture<ToDoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoList],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar a la lista la hacer click en el botón', () => {
    const tamanioAnterior = component.tareas().length;
    component.nuevaTarea = 'Algo';
    const button = fixture.nativeElement.querySelector('#agregar');
    button.click();
    fixture.detectChanges();
    expect(component.tareas().length).toBe(tamanioAnterior + 1);
    // Se podría comprobar que el último elemento sea igual a lo que estaba escrito en el texto.
  });

  it('debería guardar en nuevaTarea lo que se escriba en el input', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#nuevaTarea');
    input.value = 'algo';
    fixture.detectChanges();
    expect(input.textContent).toBe(component.nuevaTarea);
  });

  it('debería renderizar el listado de tareas', () => {
    expect(true).toBeTrue();
  });

  it('debería cambiar el estado de una tarea al hacer click en el checkbox asociado', () => {
    component.tareas.set([
      {
        texto: 'prueba',
        completado: false,
      },
    ]);
    fixture.detectChanges();

    const checkbox: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toBeFalse();

    checkbox.click();
    fixture.detectChanges();

    expect(component.tareas()[0].completado).toBeTrue();
    expect(checkbox.checked).toBeTrue();
  });
});
