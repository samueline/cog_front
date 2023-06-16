import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/shared/post.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

posts$: Array<any> = []

constructor(private postService: PostService){
  this.postService.getAllPost().subscribe(
    post => {
      this.posts$ = post
    }
  )
}

ngOnInit(): void {
  
}


}
