import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  contactMobileNumber: string = "+49 (0) 221 5894016";
  contactEmailAddress: string = "lion@pplion.com";
  selectedCountry: number = 1;
  isOpen: boolean = false;

  countries = [
    { id: 1, img: 'Inglese.jpg' },
    { id: 2, img: 'Spagnolo.png' },
    { id: 3, img: 'Tedesco.png' },
    { id: 4, img: 'Turco.svg' },
    { id: 5, img: 'download.jpg' },
  ];

  selectCountry(id: number) {
    this.selectedCountry = id;
    console.log(this.selectedCountry)
    this.isOpen = false;
  }

  getSelectedFlag() {
    const country = this.countries.find(c => c.id === this.selectedCountry);
    return country ? country.img : '';
  }
  menuItems = [
    { label: 'Home' },
    {
      label: 'Printing Machines',
      submenu: [
        {
          label: 'Printing Presses',
          submenu: [
            { label: 'Sheetfed Offset', submenu: ['1-Color', '2-Colors', '3-Colors', '4-Colors', '5-Colors', '6-Colors', '7-Colors', '8-Colors', '9-Colors', '10-12-Colors'] },
            'Web Offset Press',
            'Prepress',
            'Label Printer',
            'Screen Printer',
            'Digital Printer',
            'Letterpress',
            'Other Machines'
          ]
        },
        {
          label: 'Postpress / Bindery',
          submenu: [
            'Perfect Binder',
            'Guillotines',
            'Folding Machines',
            'Saddlestitcher',
            'Thread Sewing Machines',
            'Casemaker',
            'Collator',
            'Other Machines'
          ]
        }
      ]
    },
    {
      label: 'Packaging Machines',
      submenu: [
        {
          label: 'Corrugated Packaging',
          submenu: [
            {
              label: 'Corrugated Board Production',
              submenu: [
                'Corrugator',
                'Reel Stand and Splicer',
                'Glue Unit',
                'Single Facer',
                'Double Backer',
                'Rotary Shear',
                'Slitter Scorer',
                'Cutoff',
                'Stacker',
                'Other Machines'
              ]
            },
            {
              label: 'Corrugated Board Converting',
              submenu: [
                'Casemaker Inline',
                'Flatbed Die Cutter',
                'Rotary Die Cutter (RDC)',
                'Folder Gluer',
                'Boxmaker',
                'Flexo Printer',
                'Printer Slotter',
                'Stitcher',
                'Handplatten',
                'Assembling Machines',
                'Strapping Machines',
                'Laminator',
                'Other Machines'
              ]
            }
          ]
        },
        {
          label: 'Folding Carton Packaging',
          submenu: [
            'Flatbed Die Cutter',
            'Hot Foil Stamper',
            'Folder Gluer',
            'Laminator',
            'Window Patcher',
            'Tray Former',
            'Rigid Box',
            'Other Machines'
          ]
        },
        {
          label: 'Flexible Packaging',
          submenu: [
            'Extrusion',
            'Flexo Printer',
            'Rotogravure Printer',
            'Coating',
            'Slitter Rewinder',
            'Bag Machines',
            'Other Machines'
          ]
        }
      ]
    },
    {
      label: 'Filling Machines',
      submenu: [
        {
          label: 'Process Machines',
          submenu: []
        },
        {
          label: 'Filling And Packaging Machines',
          submenu: [
            'Cartons (Aseptic)',
            'PET Bottles',
            'Glass Bottles',
            'Cans',
            'Stand-up pouches (Doypack)',
            'Other Machines'
          ]
        }
      ]
    },
    { label: 'Our Services' },
    { label: 'Contact us' }
  ];
  activeMenu: string|null = null;

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  setActive(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
}
