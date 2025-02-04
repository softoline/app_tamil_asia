import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { TabmenuPage } from './../tabmenu/tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: "/tabmenu",
    component: TabmenuPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 

exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
