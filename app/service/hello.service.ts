import { Injectable } from '@angular/core';
@Injectable()
export class HelloService {
    getService () {
        return Promise.resolve("This is my service.");
    }
}