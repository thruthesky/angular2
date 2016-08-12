"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var GetService = (function () {
    function GetService(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }
    GetService.prototype.getUser = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data; })
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
    };
    GetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GetService);
    return GetService;
}());
exports.GetService = GetService;
//# sourceMappingURL=http.get.service.js.map