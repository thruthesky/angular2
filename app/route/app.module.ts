import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { routing } from './routing';
@NgModule({
  imports: [
      routing,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }