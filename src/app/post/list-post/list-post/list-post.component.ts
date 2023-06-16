import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/services/shared/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  postId: number;
  post: any;
  commentForm: FormGroup;
  // commentPayload: CommentPayload;
  // comments: CommentPayload[];

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
     private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    // this.commentPayload = {
    //   text: '',
    //   postId: this.postId
    // };
  }

  ngOnInit(): void {
    this.getPostById();
    // this.getCommentsForPost();
  }

  // postComment() {
  //   this.commentPayload.text = this.commentForm.get('text').value;
  //   this.commentService.postComment(this.commentPayload).subscribe(data => {
  //     this.commentForm.get('text').setValue('');
  //     this.getCommentsForPost();
  //   }, (error: any) => {
  //     throwError(error);
  //   })
  // }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  // private getCommentsForPost() {
  //   this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
  //     this.comments = data;
  //   },  (error: any) => {
  //     throwError(error);
  //   });
  // }
}
