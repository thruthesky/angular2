System.register(['@angular/core', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1;
    var HelloService, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            HelloService = (function () {
                function HelloService() {
                }
                HelloService.prototype.getService = function () {
                    return Promise.resolve("This is my service.");
                };
                HelloService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HelloService);
                return HelloService;
            }());
            AppComponent = (function () {
                function AppComponent(hello) {
                    var _this = this;
                    this.hello = hello;
                    this.message = "Message";
                    console.log('http very simple constructor...');
                    hello.getService().then(function (x) { return _this.message = x; });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Simplest App</h1><p>{{ message }}</p>",
                        providers: [HelloService]
                    }), 
                    __metadata('design:paramtypes', [HelloService])
                ], AppComponent);
                return AppComponent;
            }());
            platform_browser_dynamic_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map