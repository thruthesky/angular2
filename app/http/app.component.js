System.register(['@angular/core', './http.get.service'], function(exports_1, context_1) {
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
    var core_1, http_get_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_get_service_1_1) {
                http_get_service_1 = http_get_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(getService) {
                    this.getService = getService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("Data from getService() : ");
                    var promise = this.getService.getUser();
                    // console.log(users);
                    promise.then(function (response) {
                        console.log(response);
                        var data = response.json();
                        console.log(data);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    Hello, there!\n    ",
                    }), 
                    __metadata('design:paramtypes', [http_get_service_1.GetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map