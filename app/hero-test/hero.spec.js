System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('hero test', function () {
                it('here id', function () {
                    var x = { id: 99, name: 'i am hero' };
                    expect(x.id).toEqual(99);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map