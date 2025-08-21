import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarios } from './usuarios';

describe('Usuarios', () => {
  let component: Usuarios;
  let fixture: ComponentFixture<Usuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
