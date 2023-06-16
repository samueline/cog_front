import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatePostComponent } from './post/create-post/create-post/create-post.component';
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit/list-subreddit.component';
import { ListPostComponent } from './post/list-post/list-post/list-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit/create-subreddit.component';

const routes: Routes = [
  // {path:'', redirectTo:'login',pathMatch:'full'},
  // {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'home',component:HomeComponent},
  // {path:'**',redirectTo:'login'},
  {path:'blog',component:HomeBlogComponent},
  {path:'list-post/:id',component:ListPostComponent},
  {path:'post',component:CreatePostComponent},
  {path:'subreddit',component:ListSubredditComponent},
  {path:'subreddit/create',component:CreateSubredditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
