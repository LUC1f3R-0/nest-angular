import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public.routing.module';

import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { HomeComponent } from './pages/home/home';


@NgModule({
  declarations: [HomeComponent, Contact, About],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }