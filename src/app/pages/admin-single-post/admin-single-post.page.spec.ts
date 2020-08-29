import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSinglePostPage } from './admin-single-post.page';

describe('AdminSinglePostPage', () => {
  let component: AdminSinglePostPage;
  let fixture: ComponentFixture<AdminSinglePostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSinglePostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSinglePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
