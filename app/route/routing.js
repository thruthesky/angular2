System.register(['@angular/router', './about.component', './contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1, contact_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            // 라우팅 설정을 배열로 한다.
            appRoutes = [
                {
                    path: '',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                },
            ];
            // configured router module 을 리턴하여 AppModule 의 NgModule 에 등록 할 것이다.
            // forRoot 메소드는 라우팅을 위해서 필요한 Router service providers 와 directives 를 준다.
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=routing.js.map