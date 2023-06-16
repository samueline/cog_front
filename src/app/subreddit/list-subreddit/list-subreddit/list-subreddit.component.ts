import { Component } from '@angular/core';
import { SubredditService } from '../../subreddit.service';
import { SubredditModel } from '../../SubredditModel';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent {

  subreddits ?: Array<SubredditModel>;

  constructor(private subredditService: SubredditService){ }

  ngOnInit(){
    this.subredditService.getAllSubreddits().subscribe(
      (data:any) => {
        this.subreddits = data;
      }
    )
  }

}
