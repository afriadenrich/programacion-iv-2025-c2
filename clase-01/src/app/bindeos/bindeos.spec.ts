import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindeos } from './bindeos';

describe('Bindeos', () => {
  let component: Bindeos;
  let fixture: ComponentFixture<Bindeos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bindeos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bindeos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
