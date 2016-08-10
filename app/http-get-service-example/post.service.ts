import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
@Injectable()
export class PostService {
    private url:string = "http://jsonplaceholder.typicode.com/posts";
    constructor ( private http: Http ) { }
    getPosts ( ) {
        return this.http.get( this.url )
            .map( res => res.json() );
    }

}