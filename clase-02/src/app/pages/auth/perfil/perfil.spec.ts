import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil } from './perfil';

describe('Perfil', () => {
  let component: Perfil;
  let fixture: ComponentFixture<Perfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
