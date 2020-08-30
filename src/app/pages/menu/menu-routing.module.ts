import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard.service';


import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabmenu',
        loadChildren: () => import('../tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
    }, 
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule),
      
    },
   
   
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
