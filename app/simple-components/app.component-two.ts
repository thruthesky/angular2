import { Component,  OnInit, Input } from '@angular/core';

@Component( {
    'selector' : 'component-two',
    'template' : `<div>Hi Component One !</div> `
} )
export class ComponentTwo implements OnInit {
    @Input() username: any;
    ngOnInit() {
        console.log("ComponentTwo::ngOninit() username: " + this.username );
    }
}
