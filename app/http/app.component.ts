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

        var promise = this.getService.getUser();
        // console.log(users);
        promise.then( function( response ) {
            console.log(response);
            var data = response.json();
            console.log(data);
        });
    }
}