import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },


  { path: '**', component: PageNotFound }
];

