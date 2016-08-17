import { Component, NgModule, OnInit, Input } from '@angular/core';
@Component({
    'selector' : 'my-app',
    'template' : `
        hi
        <component-two [username]="yourname"></component-two>
    `
})
export class ComponentOne {
    public yourname: string = "JaeHo Song";
}


