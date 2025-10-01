import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoList } from './to-do-list';

describe('ToDoList', () => {
  let component: ToDoList;
  let fixture: ComponentFixture<ToDoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
