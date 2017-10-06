import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
