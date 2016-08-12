import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { AppComponent }     from './app.component';
import { GetService }       from './http.get.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ GetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
