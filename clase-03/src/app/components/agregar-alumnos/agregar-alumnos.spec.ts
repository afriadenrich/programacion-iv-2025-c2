import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnos } from './agregar-alumnos';

describe('AgregarAlumnos', () => {
  let component: AgregarAlumnos;
  let fixture: ComponentFixture<AgregarAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
