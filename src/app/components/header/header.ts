import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  constructor(private router: Router) { }
  contactMobileNumber: string = "+49 (0) 221 5894016";
  contactEmailAddress: string = "lion@pplion.com";
  selectedCountry: number = 1;
  isOpen: boolean = false;
  @Input() isSticky: boolean = false;
  countries = [
    { id: 1, img: 'Inglese.jpg' },
    { id: 2, img: 'Spagnolo.png' },
    { id: 3, img: 'Tedesco.png' },
    { id: 4, img: 'Turco.svg' },
    { id: 5, img: 'download.jpg' },
  ];

  ngOnInit():void{
    console.log("fgcgvds");
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.highlightMenu(event.urlAfterRedirects);
      });

    this.highlightMenu(this.router.url);
  }
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
    { label: 'Home', route: '/home' },
    {
      label: 'Printing Machines',
      route: '/printing-machines',
      submenu: [
        {
          label: 'Printing Presses',
          route: '/printing-machines/printing-presses',
          submenu: [
            {
              label: 'Sheetfed Offset',
              route: '/printing-machines/printing-presses/sheetfed-offset',
              submenu: [
                { label: '1-Color', route: '/printing-machines/printing-presses/sheetfed-offset/1-color' },
                { label: '2-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/2-colors' },
                { label: '3-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/3-colors' },
                { label: '4-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/4-colors' },
                { label: '5-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/5-colors' },
                { label: '6-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/6-colors' },
                { label: '7-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/7-colors' },
                { label: '8-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/8-colors' },
                { label: '9-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/9-colors' },
                { label: '10-12-Colors', route: '/printing-machines/printing-presses/sheetfed-offset/10-12-colors' }
              ]
            },
            { label: 'Web Offset Press', route: '/printing-machines/printing-presses/web-offset-press' },
            { label: 'Prepress', route: '/printing-machines/printing-presses/prepress' },
            { label: 'Label Printer', route: '/printing-machines/printing-presses/label-printer' },
            { label: 'Screen Printer', route: '/printing-machines/printing-presses/screen-printer' },
            { label: 'Digital Printer', route: '/printing-machines/printing-presses/digital-printer' },
            { label: 'Letterpress', route: '/printing-machines/printing-presses/letterpress' },
            { label: 'Other Machines', route: '/printing-machines/printing-presses/other-machines' }
          ]
        },
        {
          label: 'Postpress / Bindery',
          route: '/printing-machines/postpress-bindery',
          submenu: [
            { label: 'Perfect Binder', route: '/printing-machines/postpress-bindery/perfect-binder' },
            { label: 'Guillotines', route: '/printing-machines/postpress-bindery/guillotines' },
            { label: 'Folding Machines', route: '/printing-machines/postpress-bindery/folding-machines' },
            { label: 'Saddlestitcher', route: '/printing-machines/postpress-bindery/saddlestitcher' },
            { label: 'Thread Sewing Machines', route: '/printing-machines/postpress-bindery/thread-sewing-machines' },
            { label: 'Casemaker', route: '/printing-machines/postpress-bindery/casemaker' },
            { label: 'Collator', route: '/printing-machines/postpress-bindery/collator' },
            { label: 'Other Machines', route: '/printing-machines/postpress-bindery/other-machines' }
          ]
        }
      ]
    },
    {
      label: 'Packaging Machines',
      route: '/packaging-machines',
      submenu: [
        {
          label: 'Corrugated Packaging',
          route: '/packaging-machines/corrugated-packaging',
          submenu: [
            {
              label: 'Corrugated Board Production',
              route: '/packaging-machines/corrugated-packaging/board-production',
              submenu: [
                { label: 'Corrugator', route: '/packaging-machines/corrugated-packaging/board-production/corrugator' },
                { label: 'Reel Stand and Splicer', route: '/packaging-machines/corrugated-packaging/board-production/reel-stand-splicer' },
                { label: 'Glue Unit', route: '/packaging-machines/corrugated-packaging/board-production/glue-unit' },
                { label: 'Single Facer', route: '/packaging-machines/corrugated-packaging/board-production/single-facer' },
                { label: 'Double Backer', route: '/packaging-machines/corrugated-packaging/board-production/double-backer' },
                { label: 'Rotary Shear', route: '/packaging-machines/corrugated-packaging/board-production/rotary-shear' },
                { label: 'Slitter Scorer', route: '/packaging-machines/corrugated-packaging/board-production/slitter-scorer' },
                { label: 'Cutoff', route: '/packaging-machines/corrugated-packaging/board-production/cutoff' },
                { label: 'Stacker', route: '/packaging-machines/corrugated-packaging/board-production/stacker' },
                { label: 'Other Machines', route: '/packaging-machines/corrugated-packaging/board-production/other-machines' }
              ]
            },
            {
              label: 'Corrugated Board Converting',
              route: '/packaging-machines/corrugated-packaging/board-converting',
              submenu: [
                { label: 'Casemaker Inline', route: '/packaging-machines/corrugated-packaging/board-converting/casemaker-inline' },
                { label: 'Flatbed Die Cutter', route: '/packaging-machines/corrugated-packaging/board-converting/flatbed-die-cutter' },
                { label: 'Rotary Die Cutter (RDC)', route: '/packaging-machines/corrugated-packaging/board-converting/rotary-die-cutter' },
                { label: 'Folder Gluer', route: '/packaging-machines/corrugated-packaging/board-converting/folder-gluer' },
                { label: 'Boxmaker', route: '/packaging-machines/corrugated-packaging/board-converting/boxmaker' },
                { label: 'Flexo Printer', route: '/packaging-machines/corrugated-packaging/board-converting/flexo-printer' },
                { label: 'Printer Slotter', route: '/packaging-machines/corrugated-packaging/board-converting/printer-slotter' },
                { label: 'Stitcher', route: '/packaging-machines/corrugated-packaging/board-converting/stitcher' },
                { label: 'Handplatten', route: '/packaging-machines/corrugated-packaging/board-converting/handplatten' },
                { label: 'Assembling Machines', route: '/packaging-machines/corrugated-packaging/board-converting/assembling-machines' },
                { label: 'Strapping Machines', route: '/packaging-machines/corrugated-packaging/board-converting/strapping-machines' },
                { label: 'Laminator', route: '/packaging-machines/corrugated-packaging/board-converting/laminator' },
                { label: 'Other Machines', route: '/packaging-machines/corrugated-packaging/board-converting/other-machines' }
              ]
            }
          ]
        },
        {
          label: 'Folding Carton Packaging',
          route: '/packaging-machines/folding-carton-packaging',
          submenu: [
            { label: 'Flatbed Die Cutter', route: '/packaging-machines/folding-carton-packaging/flatbed-die-cutter' },
            { label: 'Hot Foil Stamper', route: '/packaging-machines/folding-carton-packaging/hot-foil-stamper' },
            { label: 'Folder Gluer', route: '/packaging-machines/folding-carton-packaging/folder-gluer' },
            { label: 'Laminator', route: '/packaging-machines/folding-carton-packaging/laminator' },
            { label: 'Window Patcher', route: '/packaging-machines/folding-carton-packaging/window-patcher' },
            { label: 'Tray Former', route: '/packaging-machines/folding-carton-packaging/tray-former' },
            { label: 'Rigid Box', route: '/packaging-machines/folding-carton-packaging/rigid-box' },
            { label: 'Other Machines', route: '/packaging-machines/folding-carton-packaging/other-machines' }
          ]
        },
        {
          label: 'Flexible Packaging',
          route: '/packaging-machines/flexible-packaging',
          submenu: [
            { label: 'Extrusion', route: '/packaging-machines/flexible-packaging/extrusion' },
            { label: 'Flexo Printer', route: '/packaging-machines/flexible-packaging/flexo-printer' },
            { label: 'Rotogravure Printer', route: '/packaging-machines/flexible-packaging/rotogravure-printer' },
            { label: 'Coating', route: '/packaging-machines/flexible-packaging/coating' },
            { label: 'Slitter Rewinder', route: '/packaging-machines/flexible-packaging/slitter-rewinder' },
            { label: 'Bag Machines', route: '/packaging-machines/flexible-packaging/bag-machines' },
            { label: 'Other Machines', route: '/packaging-machines/flexible-packaging/other-machines' }
          ]
        }
      ]
    },
    {
      label: 'Filling Machines',
      route: '/filling-machines',
      submenu: [
        {
          label: 'Process Machines',
          route: '/filling-machines/process-machines',
          submenu: []
        },
        {
          label: 'Filling And Packaging Machines',
          route: '/filling-machines/filling-and-packaging-machines',
          submenu: [
            { label: 'Cartons (Aseptic)', route: '/filling-machines/filling-and-packaging-machines/cartons-aseptic' },
            { label: 'PET Bottles', route: '/filling-machines/filling-and-packaging-machines/pet-bottles' },
            { label: 'Glass Bottles', route: '/filling-machines/filling-and-packaging-machines/glass-bottles' },
            { label: 'Cans', route: '/filling-machines/filling-and-packaging-machines/cans' },
            { label: 'Stand-up pouches (Doypack)', route: '/filling-machines/filling-and-packaging-machines/stand-up-pouches' },
            { label: 'Other Machines', route: '/filling-machines/filling-and-packaging-machines/other-machines' }
          ]
        }
      ]
    },
    { label: 'Our Services', route: '/our-services' },
    { label: 'Contact us', route: '/contactus' }
  ];
  activeMenu: string | null = null;

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  setActive(menu: string, route?: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
    if (route) {
      this.router.navigate([route]);
    }
  }
  highlightMenu(currentUrl: string) {
    const findActive = (items: any[], parentLabel: string | null = null): string | null => {
      for (const item of items) {
        if (currentUrl.startsWith(item.route)) {
          return parentLabel || item.label;
        }
        if (item.submenu) {
          const found = findActive(item.submenu, item.label);
          if (found) return found;
        }
      }
      return null;
    };
    this.activeMenu = findActive(this.menuItems);
  }
}
