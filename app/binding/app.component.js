System.register(['@angular/core', '@angular/forms', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
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
    var core_1, core_2, forms_1, platform_browser_dynamic_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.v = "hello";
                }
                AppComponent.prototype.isDisabled = function () {
                    return true;
                };
                AppComponent = __decorate([
                    core_2.NgModule({
                        imports: [
                            forms_1.FormsModule
                        ],
                        declarations: [
                            AppComponent
                        ]
                    }),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div>\n            Property Binding :\n            <input [disabled]=\"isDisabled()\" />\n        </div>\n        <div>\n            Directive Property Binding\n            <div [ngClass]=\"classes\">[ngClass] binding to the classes Property</div>\n        </div>\n        <div>\n            Model Property Binding\n            <hero-detail [hero]=\"currentHero\"></hero-detail>\n        </div>\n\n        <div>\n        v: {{ v }}<br>\n        <input [(ngModel)]=\"v\">\n        </div>\n    ",
                        providers: [forms_1.FormsModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            platform_browser_dynamic_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map