import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bienvenida } from './bienvenida';

describe('Bienvenida', () => {
  let component: Bienvenida;
  let fixture: ComponentFixture<Bienvenida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bienvenida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bienvenida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
