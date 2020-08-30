import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },


  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/single-post/single-post.module').then( m => m.SinglePostPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./pages/single-post/single-post.module').then( m => m.SinglePostPageModule)
  },


  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-single-post',
    loadChildren: () => import('./pages/admin-single-post/admin-single-post.module').then( m => m.AdminSinglePostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-single-post/:id',
    loadChildren: () => import('./pages/admin-single-post/admin-single-post.module').then( m => m.AdminSinglePostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'location-finder',
    loadChildren: () => import('./pages/location-finder/location-finder.module').then( m => m.LocationFinderPageModule),
    
  },

 
 

 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
