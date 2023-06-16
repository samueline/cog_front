import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/services/shared/post.service';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { SubredditModel } from 'src/app/subreddit/SubredditModel';
import { CreatePostPayload } from './create-post.payload';
import { GeneratorMlService } from 'src/app/services/shared/generator-ml.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  createPostForm: FormGroup | any;
  postPayload: CreatePostPayload | undefined;
  subreddits: Array<SubredditModel> | any

  public resumen: any;

  constructor(private router: Router, private postService: PostService,private genService :GeneratorMlService,
    private subredditService: SubredditService){
      this.postPayload = {
        postName : '',
        url: '',
        description:'',
        subredditName:''
      }
    }
    
      
    
    ngOnInit(){
      
      this.createPostForm = new FormGroup({
        postName: new FormControl('', Validators.required),
        subredditName: new FormControl(''),
        url: new FormControl(''),
        description: new FormControl('')
      })
      this.subredditService.getAllSubreddits().subscribe(
        (data : any) => {
          this.subreddits = data;
        }, (error: any) => {
          throwError(error)
        }
      )
    }


    createPost(){
    let data = {
    postName : this.createPostForm?.get('postName')?.value,
    subredditName : this.createPostForm?.get('subredditName')?.value,
    url : this.createPostForm?.get('url')?.value,
    description : this.createPostForm?.get('description')?.value
    }
    this.postService.createPost(data).subscribe(
      (res : any) => {
        this.router.navigateByUrl('/');

      }
    )

    }

    discardPost(){
      this.router.navigateByUrl('/')
    }

    getResumen(){
      let data = {
        texto : this.createPostForm?.get('description')?.value
        }
       
        
      this.genService.getResumen(data).subscribe(
        res => {
          this.resumen = res;
          this.createPostForm?.get('description').setValue(res)
        }
      )
    }
}
