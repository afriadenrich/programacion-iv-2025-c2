import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlumnos } from './detalle-alumnos';

describe('DetalleAlumnos', () => {
  let component: DetalleAlumnos;
  let fixture: ComponentFixture<DetalleAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
