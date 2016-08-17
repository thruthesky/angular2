import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    AppComponent
  ]
})


@Component ({
    selector: 'my-app',
    template: `
        <div>
            Property Binding :
            <input [disabled]="isDisabled()" />
        </div>
        <div>
            Directive Property Binding
            <div [ngClass]="classes">[ngClass] binding to the classes Property</div>
        </div>
        <div>
            Model Property Binding
            <hero-detail [hero]="currentHero"></hero-detail>
        </div>

        <div>
        v: {{ v }}<br>
        <input [(ngModel)]="v">
        </div>
    `,
    providers: [FormsModule]
})
class AppComponent {
    public v:string = "hello";
    isDisabled () {
        return true;
    }
}
import { bootstrap } from '@angular/platform-browser-dynamic';
bootstrap(AppComponent);


