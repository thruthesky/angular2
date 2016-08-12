"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
// 라우팅 설정을 배열로 한다.
var appRoutes = [
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
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map