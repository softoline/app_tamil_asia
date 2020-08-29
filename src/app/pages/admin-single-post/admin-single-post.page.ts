import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from './../../models/post';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-admin-single-post',
  templateUrl: './admin-single-post.page.html',
  styleUrls: ['./admin-single-post.page.scss'],
})
export class AdminSinglePostPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private postService: PostService,
    private router: Router,
    private toastCtrl: ToastController,) { }

    post: Post = {
      title: '',
      description: ''
    };

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
      this.router.navigateByUrl('/admin-dashboard');
      this.showToast('Post added');
    }, err => {
      this.showToast('There was a problem adding your post :(');
    });
  }
 
  deletePost() {
    this.postService.deletePost(this.post.id).then(() => {
      this.router.navigateByUrl('/admin-dashboard');
      this.showToast('Post deleted');
    }, err => {
      this.showToast('There was a problem deleting your post :(');
    });
  }
 
  updatePost() {
    this.postService.updatePost(this.post).then(() => {
      this.router.navigateByUrl('/admin-dashboard');
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
