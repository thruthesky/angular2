import { Injectable }               from '@angular/core';
import { Http }                     from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {
    private url: string = "http://jsonplaceholder.typicode.com/posts";
    constructor( private http: Http ) {}
    getUser() {
        
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data )
               .catch(this.handleError);
        /*
        let q = this.http.get( this.url )
            //.map( res => res.json() );
        let i_promise = q.toPromise();

        return i_promise.then( function( res ) : Object[] {
            let data = res.json();
            return data;
        });

        */

        /*


            .toPromise()
            .then( response => response.json().data as string[] )
            .catch( (e:any) => e.message || e );
            */
            
    }
    
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    
  }

}