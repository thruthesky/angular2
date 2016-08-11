import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

// 라우팅 설정을 배열로 한다.
const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },

];
// configured router module 을 리턴하여 AppModule 의 NgModule 에 등록 할 것이다.
// forRoot 메소드는 라우팅을 위해서 필요한 Router service providers 와 directives 를 준다.
export const routing = RouterModule.forRoot(appRoutes);
