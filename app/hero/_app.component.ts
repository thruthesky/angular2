/**
 * Created by thruthesky on 2016-08-12.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    styleUrls: ['app/hero/_app.component.css'],

    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
`,

})
export class AppComponent {
    title = 'Tour of Heroes';
}
