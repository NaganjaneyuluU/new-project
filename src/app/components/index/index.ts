import { Component, HostListener } from '@angular/core';
import { MACHINES } from '../../../dataset/cards-data';
import { machines } from '../../../dataset/cards-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-index',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  machines =machines;
  randomMachines: any[] = [];
  carouselImages: string[] = [
    '/carousel-image.webp',
    '/abfuell-home.webp',
    '/manroland-home.webp'
  ];
  currentImage = 0;
  intervalId: any;
  ngOnInit() {
    this.randomMachines = this.getRandomMachines(12);
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
  getRandomMachines(count: number) {
    return this.machines
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
}
