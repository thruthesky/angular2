import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentTwo } from './app.component-two';
import { ComponentOne } from './app.component';
@NgModule( {
    imports: [BrowserModule],
    declarations: [ ComponentOne, ComponentTwo ],
    bootstrap: [ ComponentOne ]
} )
export class AppModule {
    
}