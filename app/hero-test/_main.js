System.register(['@angular/platform-browser-dynamic', './_app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, _app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (_app_module_1_1) {
                _app_module_1 = _app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=_main.js.map