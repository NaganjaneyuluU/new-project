import { Routes } from '@angular/router';
import { Footer } from './components/footer-components/footer/footer';
import { Index } from './components/index';
import { Header } from './components/header/header';
import { ContactUs } from './components/footer-components/contact-us/contact-us';
import { Imprint } from './components/footer-components/imprint/imprint';
import { OurServices } from './our-services/our-services';
import { MachineDetails } from './components/machine-details/machine-details';


export const routes: Routes = [
     { path: 'footer', component: Footer },
     { path: 'index', component: Index },
     { path: 'header', component: Header },
     { path: 'contactus', component: ContactUs },
     { path: 'imprint', component: Imprint },
     { path: 'our-services', component: OurServices },
     { path: 'machine-details', component: MachineDetails }
];
