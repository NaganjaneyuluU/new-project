import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Index } from './index';

export const routes: Routes = [
    { path: 'header', component: Header },
     { path: 'footer', component: Footer },
     {path:'index',component:Index}
];
