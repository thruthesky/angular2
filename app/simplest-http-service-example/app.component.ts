import { Component, Injectable }        from '@angular/core';
import { Http, HTTP_PROVIDERS }                         from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
class Nginx {
    constructor( private http: Http ) {}
    getData () {
        return this.http.get('http://work.org/tmp/j.php')
            .toPromise()
            .then()
            .catch(e => console.log(e));
    }
}
@Component({
    selector: 'my-app',
    template: `
    <h1>Simplest App</h1><p>{{ message }}</p>
    <input #phone placeholder="phone number">
    <ul *ngIf="users">
    <li *ngFor="let user of users">
        {{ user.name }}
    </li>
    </ul>
    `,
    providers: [ Nginx, HTTP_PROVIDERS ]
})
class AppComponent {
    private message: string = "Message";
    private users: any[];
    constructor(private nginx: Nginx) {
        console.log('http very simple constructor...');
        nginx.getData()
            .then( res => this.users = res.json() );        
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap( AppComponent );


