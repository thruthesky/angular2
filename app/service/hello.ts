import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { bootstrap } from '@angular/platform-browser-dynamic';
@Component({
    selector: 'my-app',
    template: `
    Hello, {{ yourName }} !
    `,
    providers: [HelloService]
})
class AppComponent implements OnInit {
    yourName: string = "There";
    constructor(private helloService: HelloService ) {}
    ngOnInit() {
        this.helloService.getService()
            .then( x => this.yourName = x );
    }
}
bootstrap( AppComponent );

