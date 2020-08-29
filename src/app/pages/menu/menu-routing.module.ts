import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      path: 'register',
      loadChildren: () => import('../register/register-routing.module').then( m => m.RegisterPageRoutingModule)
    },
    {
      path: 'admin-dashboard',
      loadChildren: () => import('../admin-dashboard/admin-dashboard-routing.module').then( m => m.AdminDashboardPageRoutingModule)
    }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
