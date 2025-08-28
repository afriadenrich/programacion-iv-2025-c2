import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutoriales } from './tutoriales';

describe('Tutoriales', () => {
  let component: Tutoriales;
  let fixture: ComponentFixture<Tutoriales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutoriales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutoriales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
