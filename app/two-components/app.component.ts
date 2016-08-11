import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, Input } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: `
    <div>me</div>
    and
    <child-selector [person]="firstName">who?</child-selector>
    `
})
class AppComponent {
    firstName = 'Jung EunSu';
}

@Component({
    selector: 'child-selector',
    template: `
        {{ person }} ^^;
    `
})
class ChildComponent {
    @Input() person;
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);