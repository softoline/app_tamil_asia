import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from './../../models/post';
import { ToastController } from '@ionic/angular';

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
    private toastCtrl: ToastController,) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPost(id).subscribe(post => {
        this.post = post;
      });
    }
  }

  addPost() {
    this.postService.addPost(this.post).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Post added');
    }, err => {
      this.showToast('There was a problem adding your post :(');
    });
  }
 
  deletePost() {
    this.postService.deletePost(this.post.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Post deleted');
    }, err => {
      this.showToast('There was a problem deleting your post :(');
    });
  }
 
  updatePost() {
    this.postService.updatePost(this.post).then(() => {
      this.showToast('Post updated');
    }, err => {
      this.showToast('There was a problem updating your post :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
