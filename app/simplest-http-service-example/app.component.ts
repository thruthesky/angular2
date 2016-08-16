/// Injectable 은 Dependency Injection 을 위해서 import 하는 것이다.
import { Component, Injectable }        from '@angular/core';
import { Http, Response, HTTP_PROVIDERS }         from '@angular/http'; // Http 와 Response 를 따로 import 해야 한다.
import 'rxjs/add/operator/toPromise'; // toPromise() operator 를 사용 할 수 있도록 해 준다.
@Injectable() // Nginx 가 Injectable 하다는 것을 알린다.
class Nginx {
    constructor( private http: Http ) {} // Http 객체를 http 에 저장한다.
    getData () {
        // 이 함수는 then() 이 Promise 객체를 리턴한다.
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
    providers: [ Nginx, HTTP_PROVIDERS ] // HTTP_PROVIDERS 를 왜 여기에서 provide 해야 하나?
})
class AppComponent {
    private message: string = "Message";
    private users: any[];
    constructor(private nginx: Nginx) {
        console.log('http very simple constructor...');
        nginx.getData()
            .then(
                ( res: Response ) => this.users = res.json()
                // res => this.users = (<Response>res).json()   // 위 문장과 같은 것.
                // res => this.users = (res as Response).json() // 위 문장과 같은 것.
            );        
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap( AppComponent );


