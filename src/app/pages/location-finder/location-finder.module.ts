import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { LocationFinderPageRoutingModule } from './location-finder-routing.module';

import { LocationFinderPage } from './location-finder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationFinderPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpRAGOhdOQpRe4XPBdFEeVDwSy-ebrl-g',
      }),
  ],
  declarations: [LocationFinderPage]
})
export class LocationFinderPageModule {}
