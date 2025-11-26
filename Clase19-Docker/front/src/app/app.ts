import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule],
})
export class App {
  mensajes = signal<string[]>([]);

  mensaje = '';

  client: Socket;

  constructor() {
    this.client = io('ws://localhost:3000/');

    this.client.on('mensajeRecibido', (data) => {
      this.mensajes.update((anterior) => {
        return [...anterior, data];
      });
    });
  }

  enviar() {
    this.client.emit('enviarMensaje', this.mensaje);
    console.log('Envia el mensaje');
  }
}
