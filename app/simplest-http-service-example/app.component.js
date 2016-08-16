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
/// Injectable 은 Dependency Injection 을 위해서 import 하는 것이다.
var core_1 = require('@angular/core');
var http_1 = require('@angular/http'); // Http 와 Response 를 따로 import 해야 한다.
require('rxjs/add/operator/toPromise'); // toPromise() operator 를 사용 할 수 있도록 해 준다.
var Nginx = (function () {
    function Nginx(http) {
        this.http = http;
    } // Http 객체를 http 에 저장한다.
    Nginx.prototype.getData = function () {
        // 이 함수는 then() 이 Promise 객체를 리턴한다.
        return this.http.get('http://work.org/tmp/j.php')
            .toPromise()
            .then()
            .catch(function (e) { return console.log(e); });
    };
    Nginx = __decorate([
        // toPromise() operator 를 사용 할 수 있도록 해 준다.
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Nginx);
    return Nginx;
}());
var AppComponent = (function () {
    function AppComponent(nginx) {
        var _this = this;
        this.nginx = nginx;
        this.message = "Message";
        console.log('http very simple constructor...');
        nginx.getData()
            .then(function (res) { return _this.users = res.json(); });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Simplest App</h1><p>{{ message }}</p>\n    <input #phone placeholder=\"phone number\">\n    <ul *ngIf=\"users\">\n    <li *ngFor=\"let user of users\">\n        {{ user.name }}\n    </li>\n    </ul>\n    ",
            providers: [Nginx, http_1.HTTP_PROVIDERS] // HTTP_PROVIDERS 를 왜 여기에서 provide 해야 하나?
        }), 
        __metadata('design:paramtypes', [Nginx])
    ], AppComponent);
    return AppComponent;
}());
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.component.js.map