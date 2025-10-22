import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicaciones } from './publicaciones';

describe('Publicaciones', () => {
  let component: Publicaciones;
  let fixture: ComponentFixture<Publicaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
