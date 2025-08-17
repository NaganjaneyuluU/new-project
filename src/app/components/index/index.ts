import { Component, HostListener } from '@angular/core';
import { MACHINES } from '../../../dataset/cards-data';
import { Footer } from '../footer-components/footer/footer';
import { machines } from '../../../dataset/cards-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index',
  standalone:true,
  imports: [CommonModule, Footer],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  machines = machines;
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
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
  }  
}
