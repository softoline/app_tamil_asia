import { Component, OnInit } from '@angular/core';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  private posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
