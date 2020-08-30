import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationFinderPage } from './location-finder.page';

describe('LocationFinderPage', () => {
  let component: LocationFinderPage;
  let fixture: ComponentFixture<LocationFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationFinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
