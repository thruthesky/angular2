import { Component } from '@angular/core';
//import { myInt as myNumber, myString as myMessage } from './export';
import * as ex from './export';
import './message';
@Component({
    selector: 'my-app',
    template: `<h1>Simplest App</h1>
            {{ str }}
            {{ digit }}
    `
})
class AppComponent {
    private str:string = ex.myString;
    private digit:number = ex.myInt;
    constructor() {
        message('import-export app.component constructor...');
        message('constructor end ...');
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap( AppComponent );