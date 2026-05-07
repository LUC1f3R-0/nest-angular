import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  HomeComponent } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'about',
    component:About
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
