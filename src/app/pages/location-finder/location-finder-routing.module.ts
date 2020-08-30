import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationFinderPage } from './location-finder.page';

const routes: Routes = [
  {
    path: '',
    component: LocationFinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationFinderPageRoutingModule {}
