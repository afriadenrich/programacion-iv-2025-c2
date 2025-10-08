import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  tareas = signal<Item[]>([]);
  nuevaTarea = '';

  agregarTarea() {
    if (this.nuevaTarea !== '') {
      this.tareas.update((val) => {
        const item: Item = {
          texto: this.nuevaTarea,
          completado: false,
        };
        return [...val, item];
      });
    }
  }
}

export interface Item {
  texto: string;
  completado: boolean;
}
