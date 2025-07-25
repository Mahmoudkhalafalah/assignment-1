import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path : 'about',
        component: About
    },
    {
        path : 'portfolio',
        component: Portfolio
    },
    {
        path : 'contact',
        component: Contact
    },  
    {
        path : 'home',
        component: Home
    },
    {
        path : "**",
        component :Home
    }   
];
