import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comentario } from './comentario';

describe('Comentario', () => {
  let component: Comentario;
  let fixture: ComponentFixture<Comentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comentario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comentario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
