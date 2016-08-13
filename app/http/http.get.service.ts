import { Injectable }               from '@angular/core';
import { Http }                     from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {
    private url: string = "http://work.org/tmp/j.php";
    constructor( private http: Http ) {}
    getUser() {
        
    return this.http.get(this.url)
               .toPromise( )
               .then( r => r.json() ) // returns promise
               .catch(this.handleError);
    }
    
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    
  }

}