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
//import { myInt as myNumber, myString as myMessage } from './export';
var ex = require('./export');
require('./message');
var AppComponent = (function () {
    function AppComponent() {
        this.str = ex.myString;
        this.digit = ex.myInt;
        message('import-export app.component constructor...');
        message('constructor end ...');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Simplest App</h1>\n            {{ str }}\n            {{ digit }}\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.component.js.map