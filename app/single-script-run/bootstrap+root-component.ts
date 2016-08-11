import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
@Component({
    selector: 'my-app',
    template: `
    Hello, {{ yourName }} !
    `
})
class AppComponent {
    yourName: string = "Iron Man";
}
bootstrap( AppComponent );