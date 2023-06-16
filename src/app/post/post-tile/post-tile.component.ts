import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTileComponent implements OnInit {

  
  @Input() posts:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/list-post/' + id);
  }
}
