import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from './../../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {
  post: Post = {
    title: '',
    description: ''
  };

  constructor(private activatedRoute: ActivatedRoute, 
    private postService: PostService,
    private router: Router,
   ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPost(id).subscribe(post => {
        this.post = post;
      });
    }
  }

  

}
