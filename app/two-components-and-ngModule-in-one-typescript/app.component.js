System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/platform-browser'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1, core_2, platform_browser_1;
    var AppComponent, ChildComponent, AppModule;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            // 부모 컴포넌트
            AppComponent = (function () {
                function AppComponent() {
                    this.firstName = 'Jung EunSu';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div>me</div>\n    and\n    <child-selector [person]=\"firstName\">who?</child-selector>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            // 자식 컴포넌트
            // [person] 을 @Input() 으로 decorate 하고 binding
            ChildComponent = (function () {
                function ChildComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChildComponent.prototype, "person", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child-selector',
                        template: "\n        {{ person }} ^^;\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            // 사용하는 모든 컴포넌트를 declarations 에 등록
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_2.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule
                        ],
                        declarations: [
                            AppComponent,
                            ChildComponent
                        ],
                        bootstrap: [AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
            // app 실행.
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});
//# sourceMappingURL=app.component.js.map