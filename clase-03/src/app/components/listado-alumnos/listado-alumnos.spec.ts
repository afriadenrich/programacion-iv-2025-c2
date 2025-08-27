import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnos } from './listado-alumnos';

describe('ListadoAlumnos', () => {
  let component: ListadoAlumnos;
  let fixture: ComponentFixture<ListadoAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
