import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton } from './boton';

describe('Boton', () => {
  let component: Boton;
  let fixture: ComponentFixture<Boton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
