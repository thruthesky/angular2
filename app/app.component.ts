import { Component } from '@angular/core';
//import { NgifComponent } from './ngif.component'
import {NgSwitchComponent} from './ngSwitch.component';
@Component({
  selector: 'my-app',
  template: '<h1>Hello, world!</h1><holder></holder>',
  //directives: [ NgifComponent ]
  directives: [ NgSwitchComponent ]
})
export class AppComponent {}


