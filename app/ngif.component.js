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
var NgifComponent = (function () {
    function NgifComponent() {
        this.books = [''];
    }
    NgifComponent = __decorate([
        core_1.Component({
            selector: 'holder',
            template: "\n    <h2>Books</h2>\n    <div [hidden]=\"books.length == 0\">\n        List of Books\n    </div>\n    <div [hidden]=\"books.length > 0\">\n        You don't have any books.\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NgifComponent);
    return NgifComponent;
}());
exports.NgifComponent = NgifComponent;
//# sourceMappingURL=ngif.component.js.map