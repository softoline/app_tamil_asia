import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSinglePostPageRoutingModule } from './admin-single-post-routing.module';

import { AdminSinglePostPage } from './admin-single-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSinglePostPageRoutingModule
  ],
  declarations: [AdminSinglePostPage]
})
export class AdminSinglePostPageModule {}
