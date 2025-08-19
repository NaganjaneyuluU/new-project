import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  isModalOpen: boolean = false;
    openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  contactMobileNumber: string = "+49 (0) 221 5894016";
  contactEmailAddress: string = "lion@pplion.com";
contactFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: '',
    message: '',
    privacy: false
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', this.contactFormData);
      alert('Your message has been sent successfully!');
      form.resetForm();
    } else {
      alert('Please fill out all required fields before submitting.');
    }
  }
}
