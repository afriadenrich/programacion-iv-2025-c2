import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cargando } from './cargando';

describe('Cargando', () => {
  let component: Cargando;
  let fixture: ComponentFixture<Cargando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cargando]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cargando);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
