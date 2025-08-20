import { Component, HostListener, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer-components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,RouterModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   isSticky: boolean = false;
  protected readonly title = signal('new-project');
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 150;
  }
}
