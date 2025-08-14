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
    '/carousel-image.webp',
    '/abfuell-home.webp',
    '/manroland-home.webp'
  ];

  currentImage = 0;
  intervalId: any;
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Change every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
  }
}
