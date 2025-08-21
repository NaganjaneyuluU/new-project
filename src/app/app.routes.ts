import { Routes } from '@angular/router';
import { Footer } from './components/footer-components/footer/footer';
import { Index } from './components/index';
import { Header } from './components/header/header';
import { ContactUs } from './components/footer-components/contact-us/contact-us';
import { Imprint } from './components/footer-components/imprint/imprint';
import { OurServices } from './our-services/our-services';
import { MachineDetails } from './components/machine-details/machine-details';
import { MachineCategory } from './machine-category/machine-category';
import { PrivacyPolicy } from './components/footer-components/privacy-policy/privacy-policy';


export const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'footer', component: Footer },
     { path: 'home', component: Index },
     { path: 'header', component: Header },
     { path: 'contactus', component: ContactUs },
     { path: 'imprint', component: Imprint },
     { path: 'our-services', component: OurServices },
     { path: 'machine-details', component: MachineDetails },
     { path:'machine-category',component:MachineCategory },
     {path:'privacy-policy',component:PrivacyPolicy},
      { path: '**', redirectTo: '/home' }
      
];
