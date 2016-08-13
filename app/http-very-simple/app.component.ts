import { Component, Injectable } from '@angular/core';

@Injectable()
export class HelloService {
    getService () {
        return Promise.resolve("This is my service.");
    }
}

@Component({
    selector: 'my-app',
    template: `<h1>Simplest App</h1><p>{{ message }}</p>`,
    providers: [HelloService]
})
class AppComponent {
    private message: string = "Message";
    constructor(private hello: HelloService) {
        console.log('http very simple constructor...');
        hello.getService().then(x => this.message = x);
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap( AppComponent );
