import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSinglePostPage } from './admin-single-post.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSinglePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSinglePostPageRoutingModule {}
