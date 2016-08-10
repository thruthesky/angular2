import { Component } from '@angular/core';
import { SimpleComponent } from './simple.component'
@Component({
  selector: 'my-app',
  template: '<h1>Hello, world!</h1><holder></holder>',
  directives: [ SimpleComponent ]
})
export class AppComponent {}


