import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabmenuPage,
    children: [
      {path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {path: 'posts',
      loadChildren: () => import('../posts/posts.module').then( m => m.PostsPageModule)
    },
    {path: 'shops',
      loadChildren: () => import('../business/business.module').then( m => m.BusinessPageModule)
    },
    {path: 'account',
      loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
    },
    ]
      
    
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}
