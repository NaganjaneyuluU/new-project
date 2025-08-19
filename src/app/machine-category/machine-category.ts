import { Component } from '@angular/core';
import { MACHINES } from '../../dataset/cards-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machine-category',
  imports: [CommonModule],
  templateUrl: './machine-category.html',
})
export class MachineCategory {
machines=MACHINES
}
