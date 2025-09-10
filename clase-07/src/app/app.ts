import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chat } from './pages/chat/chat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Chat],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
