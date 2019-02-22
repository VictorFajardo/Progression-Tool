import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Section2Component } from './section2/section2.component';
import { FooterComponent } from './footer/footer.component';

import * as $ from 'jquery';
import { Section0Component } from './section0/section0.component';
import { Section1Component } from './section1/section1.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    Section2Component,
    FooterComponent,
    Section0Component,
    Section1Component,
    Section3Component,
    Section4Component,
    Section5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
