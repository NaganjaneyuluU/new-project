import { Component } from '@angular/core';
import { MACHINES } from '../../../dataset/cards-data';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer-components/footer/footer';

@Component({
  selector: 'app-index',
  imports: [CommonModule,Header,Footer],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
machines = MACHINES;
 carouselImages: string[] = [
    'assets/images/machine1.jpg',
    'assets/images/machine2.jpg',
    'assets/images/machine3.jpg'
  ];

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }
}
