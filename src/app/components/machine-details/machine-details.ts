import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { machines } from '../../../dataset/cards-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machine-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './machine-details.html'
})
export class MachineDetails implements OnInit {
  images: string[] = [
    '/machine-mainimage.webp',
    '/machine-mainimag1e.webp',
    '/machine-mainimage1.webp'
  ];
  contactFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
     userType: '',
    message: '',
    privacy: false
  };
  step: number = 1;
  selectedImage = this.images[0];
  machines=machines;
  selectedMachine:any;
  category:any;
  MachinesOfSelectedCategory:any[]=[];
  constructor(private route: ActivatedRoute) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      form.resetForm();
    } else {
      // alert('Please fill out all required fields before submitting.');
    }
  }
  nextStep() {
    this.step=2;
  }
  previousStep(){
    this.step=1;
  }
  currentIndex = 0;
  itemsPerPage = 4;
  interval: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    const id = params['id'];
       if (id) {
        this.selectedMachine = machines.find(m => m.referenceId === id);
        console.log(this.selectedMachine)
      }
    });
    this.category=this.selectedMachine.category;
    this.MachinesOfSelectedCategory = machines.filter(m => m.category === this.category);
    this.updateItemsPerPage();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  /** Responsive item count */
  @HostListener('window:resize')
  updateItemsPerPage() {
    const width = window.innerWidth;
    if (width < 640) this.itemsPerPage = 1;   // mobile
    else if (width < 1024) this.itemsPerPage = 2; // tablet
    else if (width < 1280) this.itemsPerPage = 3; // small desktop
    else this.itemsPerPage = 4;               // large desktop
  }

  /** Navigation */
  prevSlide() {
    if (this.currentIndex > 0) this.currentIndex--;
    else this.currentIndex = this.machines.length - this.itemsPerPage;
  }

  nextSlide() {
    if (this.currentIndex < this.machines.length - this.itemsPerPage) this.currentIndex++;
    else this.currentIndex = 0;
  }

  /** Auto slide */
  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds
  }

}
