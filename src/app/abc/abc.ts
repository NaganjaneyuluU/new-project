import { Component } from '@angular/core';
import { MACHINES } from '../../dataset/cards-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abc',
  imports: [CommonModule],
  templateUrl: './abc.html',
  styleUrl: './abc.css'
})
export class Abc {
machines=MACHINES
}
