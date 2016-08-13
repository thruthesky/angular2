import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>Simplest App</h1>`
})
class AppComponent {
    constructor() {
        console.log('http very simple constructor...');
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap( AppComponent );