import { Routes } from '@angular/router';
import { Clase5Component } from './clase5/clase5.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
   component: HomeComponent
  },
  {
      path: 'clase5',
     component: Clase5Component
  },
  {
    path: 'Cards',
   component: CardComponent
  }


];
