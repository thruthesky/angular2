import {Component} from '@angular/core';
@Component({
    selector: 'holder',
    template: `
    <h2>Books</h2>
    <div [hidden]="books.length == 0">
        List of Books
    </div>
    <div [hidden]="books.length > 0">
        You don't have any books.
    </div>
    `
})
export class NgifComponent {
    private books:string[] = [''];
}