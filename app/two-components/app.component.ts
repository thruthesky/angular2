import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, Input } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 부모 컴포넌트
@Component({
    selector: 'my-app',
    template: `
    <div>me</div>
    and
    <child-selector [person]="firstName">who?</child-selector>
    `
})
class AppComponent {
    firstName = 'Jung EunSu';
}

// 자식 컴포넌트
// [person] 을 @Input() 으로 decorate 하고 binding
@Component({
    selector: 'child-selector',
    template: `
        {{ person }} ^^;
    `
})
class ChildComponent {
    @Input() person;
}

// 사용하는 모든 컴포넌트를 declarations 에 등록
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// app 실행.
platformBrowserDynamic().bootstrapModule(AppModule);