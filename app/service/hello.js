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
var hello_service_1 = require('./hello.service');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var AppComponent = (function () {
    function AppComponent(helloService) {
        this.helloService = helloService;
        this.yourName = "There";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helloService.getService()
            .then(function (x) { return _this.yourName = x; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    Hello, {{ yourName }} !\n    ",
            providers: [hello_service_1.HelloService]
        }), 
        __metadata('design:paramtypes', [hello_service_1.HelloService])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=hello.js.map