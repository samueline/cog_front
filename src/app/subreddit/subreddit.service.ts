import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditModel } from './SubredditModel';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>('http://localhost:8070/api/subreddit');
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>('http://localhost:8070/api/subreddit',
      subredditModel);
  }

}
