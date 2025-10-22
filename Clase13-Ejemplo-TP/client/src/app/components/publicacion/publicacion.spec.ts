import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicacion } from './publicacion';

describe('Publicacion', () => {
  let component: Publicacion;
  let fixture: ComponentFixture<Publicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
