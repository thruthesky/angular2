import { Component, OnInit }        from '@angular/core';
import { GetService }       from './http.get.service';
@Component({
    selector: 'my-app',
    template: `
    Hello, there!
    `,
})
export class AppComponent {
    constructor ( private getService: GetService ) { }

    ngOnInit() {
        console.log("Data from getService() : ");

        
        this.getService.getUser()
            .then( x => console.log(x) );

    }
}