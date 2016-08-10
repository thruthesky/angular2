 
import { Component } from '@angular/core';
import { PostService } from './post.service';
import {HTTP_PROVIDERS} from '@angular/http';
@Component({
  selector: 'my-app',
  template: '<h1>Hello, world! Hello, you!</h1>',
  providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent {
  constructor ( private postService: PostService ) {
    this.postService.getPosts()
      .subscribe( posts => console.log( posts ) );
  }
}
