import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';





import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DividerModule} from 'primeng/divider';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { CreatePostComponent } from './post/create-post/create-post/create-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit/create-subreddit.component';
import { ListPostComponent } from './post/list-post/list-post/list-post.component';
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit/list-subreddit.component';
import { PostTileComponent } from './post/post-tile/post-tile.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HomeBlogComponent,
    CreateSubredditComponent,
    ListPostComponent,
    ListSubredditComponent,
    CreatePostComponent,
    PostTileComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    HttpClientModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
