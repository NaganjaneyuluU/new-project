import { Routes } from '@angular/router';
import { Footer } from './components/footer-components/footer/footer';
import { Index } from './components/index';
import { Header } from './components/header/header';
import { Imprint } from './components/footer-components/imprint/imprint';


export const routes: Routes = [
     { path: 'footer', component:Footer },
     {path:'index',component:Index},
     {path:'header',component:Header},
    { 
    path: 'footer-components',
    children: [
      { path: 'footer', component: Footer },
      { path: 'imprint', component: Imprint }
    ]
  },
];
