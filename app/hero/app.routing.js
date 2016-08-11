"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
// 라우팅 설정을 배열로 한다.
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
// configured router module 을 리턴하여 AppModule 의 NgModule 에 등록 할 것이다.
// forRoot 메소드는 라우팅을 위해서 필요한 Router service providers 와 directives 를 준다.
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map