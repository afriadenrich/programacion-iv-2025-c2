import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Db } from './services/db';
import { Auto } from './classes/auto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('clase-06');

  autos = signal<Auto[]>([]);
  error = signal<string | null>(null);

  dbService = inject(Db);

  async ngOnInit() {
    const respuestaSelect = await this.dbService.traerAutos();

    this.autos.set(respuestaSelect);
    const auto = new Auto();

    // auto.id = 999;

    auto.marca = 'VW';
    auto.modelo = 'Fitito';
    auto.precio = 2;
    auto.disponible = true;

    //const respuestaInsert = await this.dbService.crearAuto(auto);

    //this.error.set(respuestaInsert);
  }
}
